const influx = require("../InfluxDB/configInfluxDB");

function GetWeek(){
    const value = influx.selectWeek('APIvalue')
    .then(res=>{
        let Week=[]
        for(let i=0;i<res.length;i++){
        let week        = res[i].time
        let run         = res[i].runtime
        let idle        = res[i].idletime
        let down        = res[i].downtime
        let getWeek     = JSON.stringify({week})
        let changeWeek  = JSON.parse(getWeek)
        let arrayWeek   = [];
            for (var j in changeWeek){
                arrayWeek.push(j, changeWeek[j])
            }
        let getArray    = arrayWeek[1]
        let oneWeek = getArray.slice(5,-14)
        Week.push({oneWeek,run,idle,down})
    }
        return JSON.stringify(Week)
       
    })
    return value
}

GetWeek().then(res=>console.log(res))

module.exports = GetWeek