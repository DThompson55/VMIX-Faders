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
      ipc.sendSync('faderEvent',{"key":(i.id).slice(7),"value":i.value});
  }

  function convertToSlider(x){
  	return fromDB(x);
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
    f.setAttribute("value" ,s.volume); // db coming in to 0-100
    f.setAttribute("title", s.title); 

//
// the slider out will be 0-1 for the calculation
// so the calculation can expect 100-0 and change that.
// vmix expects 0-100 like db *100
//

	let fv = document.createElement('div');// class="faderValueClass" id="faderValue_0">100</div>/>')  
	fv.setAttribute("class", "vfaderValue");
    let fvdb = document.createElement('div');// class="faderValueClass" id="faderValue_0">100</div>/>')  
    fvdb.setAttribute("class", "vfaderValue");

    fv.innerHTML = parseInt(f.value)+1.0
    fvdb.innerHTML = Math.floor(toDB(parseInt(f.value)+1.0))
    f.addEventListener('input', function () {
     fv.innerHTML = parseInt(f.value)+1.0
     fvdb.innerHTML = Math.floor(toDB(parseInt(f.value)+1.0))
     updateFaderValue(f)
    }, false);     

	  r.appendChild(c)
	  c.appendChild(sh)
	  c.appendChild(fdiv)
	  fdiv.appendChild(f)
	  c.appendChild(fv)
    c.appendChild(fvdb)
//    c.appendChild(fvlin)

	}

var sensitivity = 1.0
function toDB(x) 
{   
	x = 100-x;
	if ( x < 40){
		retval = (x * (-(20/40)))+10
	} else {
		retval = (x * (-(30/40)))+20
	}

//	console.log(x,retval)
//    let retval = (sensitivity*(20.0**y));
//    let retval = (sensitivity*(20.0*Math.log10(y)));
//    console.log(x,y,Math.log10(y),retval)
    return retval;
}
function fromDB(x) {
	return 100+toDB(x+1);
}



	ipc.on('VMIX_STATUS', (event, message) => {
	  var faders = JSON.parse(message);
	  for (var n in faders){
	    addFaderRow(faders[n])
//	    if (n>2) break;
	    }   
	})
})