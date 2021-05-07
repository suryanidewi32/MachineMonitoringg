const influx = require("../InfluxDB/configInfluxDB");

function Get3Month(){
    const value = influx.selectThreeMonth('APIvalue')
    .then(res=>{
        let final=[]
        for(let i=0;i<res.length;i++){
        let time        = res[i].time
        let run         = res[i].runtime
        let idle        = res[i].idletime
        let down        = res[i].downtime
        let getTime     = JSON.stringify({time})
        let changeTime  = JSON.parse(getTime)
        let arrayTime   = [];
            for (var j in changeTime){
                arrayTime.push(j, changeTime[j])
            }
        let getArray    = arrayTime[1]
        let months = getArray.slice(5,-14)
        final.push({months,run,idle,down})
    }
        return final
       
    })
    return value
}

Get3Month().then(res=>console.log(res))

module.exports = Get3Month