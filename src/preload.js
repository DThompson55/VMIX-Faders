	const electron = require('electron')
	const ipc = electron.ipcRenderer;

	window.addEventListener('DOMContentLoaded', () => {

	const replaceText = (selector, text) => {
	  const element = document.getElementById(selector)
	  if (element) element.innerText = text
	}

	for (const dependency of ['chrome', 'node', 'electron']) {
	  replaceText(`${dependency}-version`, process.versions[dependency])
	}

  function updateFaderValue(i){
  	// convert to 0-100 here
      var retval = ipc.sendSync('faderEvent',{"key":(i.id).slice(5),"value":i.value});
      return retval;
  }

	function addFaderRow(s){
	  let r = document.querySelector('#faderRow');
	  let c = document.createElement("div")// class="column">") 
	  c.setAttribute("class", "column");
	  let sh =  document.createElement("div");// class="faderHeader">")
	  sh.setAttribute("class", "vfaderHeader");
	  sh.innerHTML = (s.label);
	  let fdiv =  document.createElement("div");// class="faderHeader">")
	  fdiv.setAttribute("class", "vfaderDiv");
	  let f = document.createElement('input');// class="vfader" type="range" />') 
	  f.setAttribute("class", "vfader");
	  f.setAttribute("type", "range");
	  f.setAttribute("max", 99);
	  f.setAttribute("id", s.id);
    f.setAttribute("value" ,s.faderValue); // db coming in to 0-100    
    f.setAttribute("title", s.title); 

//
// the slider out will be 0-1 for the calculation
// so the calculation can expect 100-0 and change that.
// vmix expects 0-100 like db *100
//

	let fv = document.createElement('div');// class="faderValueClass" id="faderValue_0">100</div>/>')  
	  fv.setAttribute("class", "vfaderValue");
    let fvVal = document.createElement('div');// class="faderValueClass" id="faderValue_0">100</div>/>')  
    fvVal.setAttribute("class", "vfaderValue");
    let fvdb = document.createElement('div');// class="faderValueClass" id="faderValue_0">100</div>/>')  
    fvdb.setAttribute("class", "vfaderValue");

    fv.innerHTML = 101-parseInt(f.value)
    fvVal.innerHTML = s.dbValue;
    fvdb.innerHTML  = s.vmixValue;

    f.addEventListener('input', function () {
     fv.innerHTML = parseInt(f.value)+1
     data = updateFaderValue(f)
     fvVal.innerHTML = data.dbValue;//Math.floor(db[parseInt(f.value)+1])
     fvdb.innerHTML = data.vmixValue;//Math.floor(db[parseInt(f.value)+1])

    }, false);     

	  r.appendChild(c)
	  c.appendChild(sh)
	  c.appendChild(fdiv)
	  fdiv.appendChild(f)
	  c.appendChild(fv)
	  c.appendChild(fvVal)
    c.appendChild(fvdb)

    return f;
	}



	ipc.on('VMIX_STATUS', (event, message) => {
	  var faders = JSON.parse(message);
	  for (var n in faders){
	    var fader = addFaderRow(faders[n])
	    fader.dispatchEvent(new Event('input'));
//	    if (n>2) break;
	    }   
	})
})