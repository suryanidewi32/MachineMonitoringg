
const influx = require("../InfluxDB/configInfluxDB");

function GetDay(){
    const value = influx.selectDate('APIvalue')
    .then(res=>{
        let ArrayDay=[]
        let ArrayRun=[]
        let all=[]
        for(let i=0;i<res.length;i++){
        let time1        = res[i].time
        let run1         = res[i].runtime
        let idle        = res[i].idletime
        let down        = res[i].downtime
        let getTime     = JSON.stringify({time1})
        let changeTime  = JSON.parse(getTime)
        let arrayTime   = [];
            for (var j in changeTime){
                arrayTime.push(j, changeTime[j])
            }
        let getArray    = arrayTime[1]
        let day = getArray.slice(11,-8)
        ArrayDay.push({day})
        time = ArrayDay.map(function (obj) {
            return obj.day;
          });
        ArrayRun.push({run1})
        run = ArrayRun.map(function (obj){
            return obj.run1;
        });
        all.push({time,run})
    }

        return JSON.stringify({all})
       
    })
    return value
}

GetDay().then(res=>console.log(res))

module.exports = GetDay