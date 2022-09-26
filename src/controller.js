const scnMgr = require('./sceneManager.js')
const vMix = require('./vMixHelper.js')
const faderValues = require('./fader2db.js')

function connect(callback){ //{vMixCfg:result, vMixStatus:"Connected to vMix"}
//console.log("CONNECTING...");
    vMix.connect(cfg=>{
        try {
        iFaders = 0;
        faders =[]    

        let r = cfg.vMixCfg.vmix.audio[0].master[0]["$"]
        faders.push({"label":"M","id":"MFader","title":"Master","volume":r.volume,"mute":r.muted})

        var input = cfg.vMixCfg.vmix.inputs[0].input ;
        for (i in input){
                let r = input[i]['$'];
                if (r.volume ) r.volume = parseInt(r.volume)
                if (!isNaN(r.volume)){
//                    console.log(r)
                 faderValue = faderValues.getFaderValue(r.volume);
                 faders.push({"label":r.number,"id":"fader"+r.number,"title":r.shortTitle,"volume":r.volume,"faderValue":faderValue,"mute":r.muted})
                }
        }
        cfg.faders = faders;
        callback(cfg);
    } catch (e) {console.log(e)}
    })
}

function getStatus(){
    return vMix.status;
}

dbBag = [];

function getDB_Bag(){
    return dbBag;
}

function updateFader(arg){
    nValue = Number(arg.value)+1
    dbValue = faderValues.getDBValue(nValue);
    vMix.send({"Function":"SetVolume", "Input":arg.key, "Value":nValue, "IgnoreDB":dbValue})
    if (process.env["VMIX_TRACE"]){
        connect( cfg =>{
            for (i in cfg.faders) {
                console.log({"n":nValue,"db":dbValue,"vmix":cfg.faders[i].volume})
                if (cfg.faders[i].label == arg.key){
                    dbBag[nValue] = {"n":nValue,"db":dbValue,"vmix":cfg.faders[i].volume}
                }
                }
            })
        }
}

module.exports = {connect:connect, getStatus: getStatus, updateFader, updateFader, getdbbag:getDB_Bag}
