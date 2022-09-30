var sliderPosition = require('./vmixVolumes.js').sliderPosition;

var convert = [
{"db": 0, "voltage":1.00,  "power":1.00 },
{"db":-1, "voltage":0.891, "power":0.794},
{"db":-2, "voltage":0.794, "power":0.631},
{"db":-3, "voltage":0.707, "power":0.500},
{"db":-4, "voltage":0.631, "power":0.398},
{"db":-5, "voltage":0.562, "power":0.361},
{"db":-6, "voltage":0.500, "power":0.250},
{"db":-7, "voltage":0.477, "power":0.224},
{"db":-8, "voltage":0.398, "power":0.158},
{"db":-9, "voltage":0.355, "power":0.125},
{"db":-10, "voltage":0.316, "power":0.100},
{"db":-12, "voltage":0.250, "power":0.063},
{"db":-15, "voltage":0.178, "power":0.031},
{"db":-30, "voltage":0.032, "power":0.001},
{"db":-40, "voltage":0.010, "power":0.000},
{"db":-50, "voltage":0.003, "power":0.000}]


function getvMixVolumeValue(n){ 
 return sliderPosition[n].m;
}

function getVMixDB(n){ 
 var v = getvMixVolumeValue(n)/100
 for (var i in convert){
 	// or they could be using power instead of voltage
 	if (convert[i].voltage < v)
 		return convert[i-1].db;
 } 
 return -60;
}

function getVMixDBPower(n){ 
 var v = getvMixVolumeValue(n)/100
 for (var i in convert){
 	// or they could be using power instead of voltage
 	if (convert[i].power < v)
 		return convert[i-1].db;
 } 
 return -60;
}

function getFaderValue(x){ // returns the slider value for a given vMix Volume
	var m = 64;
	var n = m;
	for (var i = 0; i < 9 ; i++){
		n = Math.floor(n/2)
		if (x < sliderPosition[m].l) m = m - n;
		else if (x > sliderPosition[m].h) m = m + n;
		else return m
	}
	return m
}

//for ( i in db ) console.log(i,db[i])
console.log("look up vMixVolumes")
console.log(getvMixVolumeValue(0))
console.log(getvMixVolumeValue(50))
console.log(getvMixVolumeValue(100))
console.log("look up vMixDB")
console.log(getVMixDB(0))
console.log(getVMixDB(50))
console.log(getVMixDB(100))
console.log("look up faders from vmix values")
console.log(75,getFaderValue(75))
console.log(66,getFaderValue(66))
console.log(50,getFaderValue(50))
console.log(33,getFaderValue(33))
console.log(0.286416,getFaderValue(0.286416))

module.exports = {getvMixVolumeValue:getvMixVolumeValue, getFaderValue: getFaderValue,getVMixDB:getVMixDB, getVMixDBPower:getVMixDBPower}
