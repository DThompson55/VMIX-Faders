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
var db = [];

for (var i = 100; i < 102; i++){
	db[i]= 100.0;	
}
db[100]= 100.0;
db[99] = 90.546433333;
db[98] = 81.092866666;
db[97] = 71.6393;		// -3db
db[96] = 65.159743333;
db[95] = 58.6801866666;
db[94] = 52.20063;		// -6db
db[93] = 47.13877;
db[92] = 42.07691;
db[91] = 37.01505;		//-9db
db[90] = 31.64063; 		//-10db
db[89] = 28.526155;
db[88] = 25.41168;		//-12db
db[87] = 23.3364;
db[86] = 21.26112;
db[85] = 19.18584;
db[84] = 17.11056;
db[83] = 15.03528;
db[82] = 12.96;			//-18db
db[81] = 11.397248;
db[80] = 9.834496; 		//-20db
db[79] = 9.0205572;
db[78] = 8.2066184;
db[77] = 7.3926796;
db[76] = 6.5787408;
db[75] = 5.764802;		//-25db
db[74] = 5.2341808;
db[73] = 4.7035596;
db[72] = 4.1729384;
db[71] = 3.6423172;
db[70] = 3.111696;  	//-30db
db[69] = 2.905384;
db[68] = 2.699072;
db[67] = 2.49276;
db[66] = 2.286448;
db[65] = 2.080136;
db[64] = 1.873824;
db[63] = 1.667512;
db[62] = 1.4612;
db[61] = 1.254888;
db[60] = 1.048576; //-40db
db[59] = 0.976896;
db[58] = 0.905216;
db[57] = 0.833536;
db[56] = 0.761856;
db[55] = 0.690176;
db[54] = 0.618496;
db[53] = 0.546816;
db[52] = 0.475136;
db[51] = 0.403456;
db[50] = 0.331776; //-50
db[49] = 0.309096;
db[48] = 0.286416;
db[47] = 0.263736;
db[46] = 0.241056;
db[45] = 0.218376;
db[44] = 0.195696;
db[43] = 0.173016;
db[42] = 0.150336;
db[41] = 0.127656;
db[40] = 0.104976; //-60
db[39] = 0.0980291809;
db[38] = 0.09108236181;
db[37] = 0.084135542727;
db[36] = 0.077188723636;
db[35] = 0.070241904545;
db[34] = 0.063295085454;
db[33] = 0.056348266363;
db[32] = 0.049401447272;
db[31] = 0.0424546281818;
db[30] = 0.03550780909;   // little bump here
db[29] = 0.02856099;
db[28] = 0.0275840957895;
db[27] = 0.0266072015789;
db[26] = 0.0256303073684;
db[25] = 0.0246534131;
db[24] = 0.023676518947;
db[23] = 0.0226996247368;
db[22] = 0.0217227305263;
db[21] = 0.020745836315;
db[20] = 0.019768942105;
db[19] = 0.0187920478947;
db[18] = 0.0178151536842;
db[17] = 0.016838259473;
db[16] = 0.015861365263;
db[15] = 0.0148844710526;
db[14] = 0.0139075768421;
db[13] = 0.0129306826316;
db[12] = 0.011953788421;
db[11] = 0.0109768942105;
db[10] = 0.01;				//-90
db[9]  = 0.009;
db[8]  = 0.008;
db[7]  = 0.007;
db[6]  = 0.006;
db[5]  = 0.005;
db[4]  = 0.004;
db[3]  = 0.00300000000003;
db[2]  = 0.00200000000003;
db[1]  = 0.00100000000003;
db[0]  = 0.0;


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
    let fvdb = document.createElement('div');// class="faderValueClass" id="faderValue_0">100</div>/>')  
    fvdb.setAttribute("class", "vfaderValue");

    fv.innerHTML = 101-parseInt(f.value)
    fvdb.innerHTML = Math.floor(db[parseInt(f.value)+1])
    f.addEventListener('input', function () {
     fv.innerHTML = parseInt(f.value)+1
     fvdb.innerHTML = Math.floor(db[parseInt(f.value)+1])
     console.log(f.value)
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



	ipc.on('VMIX_STATUS', (event, message) => {
	  var faders = JSON.parse(message);
	  for (var n in faders){
	    addFaderRow(faders[n])
//	    if (n>2) break;
	    }   
	})
})