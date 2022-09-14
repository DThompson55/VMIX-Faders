const scnMgr = require('./sceneManager.js')
const vMix = require('./vMixHelper.js')


function connect(callback){ //{vMixCfg:result, vMixStatus:"Connected to vMix"}
console.log("CONNECTING...");
    vMix.connect(cfg=>{
        iFaders = 0;
        faders =[]    
        var input = cfg.vMixCfg.vmix.inputs[0].input ;
        let r = cfg.vMixCfg.vmix.audio[0].master[0]["$"]
        faders.push({"label":"M","id":"MFader","title":"Master","volume":r.volume,"mute":r.muted})

        var input = cfg.vMixCfg.vmix.inputs[0].input ;
        for (i in input){
                let r = input[i]['$'];
                if (r.volume ) r.volume = parseInt(r.volume)
                if (!isNaN(r.volume)){
                 faders.push({"label":r.number,"id":"fader"+r.number,"title":r.shortTitle,"volume":r.volume,"mute":r.muted})
                }
        }
        cfg.faders = faders;
        callback(cfg);
    })
}

function getStatus(){
    return vMix.status;
}

function updateFader(arg){
    vMix.send({"Function":"setVolume", "Input":arg.key, "Value":arg.value})
}

module.exports = {connect:connect, getStatus: getStatus, updateFader, updateFader}
