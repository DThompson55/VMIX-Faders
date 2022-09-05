const scnMgr = require('./sceneManager.js')
const vMix = require('./vMixHelper.js')


function connect(callback){ //{vMixCfg:result, vMixStatus:"Connected to vMix"}
console.log("CONNECTING...");
    vMix.connect(cfg=>{
        callback(cfg)
    })
}

function getStatus(){
    return vMix.status;
}

function updateFader(arg){
    console.log(arg)
    vMix.send({"Function":"setVolume", "Input":arg.key, "Value":arg.value})
}

module.exports = {connect:connect, getStatus: getStatus, updateFader, updateFader}
