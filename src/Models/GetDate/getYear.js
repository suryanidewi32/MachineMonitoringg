const influx = require("../InfluxDB/configInfluxDB");

function GetYear(){
    const value = influx.selectYear('APIvalue')
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
        let year = getArray.slice(0,-14)
        final.push({year,run,idle,down})
    }
        return final
       
    })
    return value
}

GetYear().then(res=>console.log(res))

module.exports = GetYear