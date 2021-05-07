import React from "react";
import axios from "axios";
import GraphPage from "../../Views/Pages/GraphPage/GraphPage";
import { Feedback } from "@material-ui/icons";
const DateChart = 'http://192.168.254.106:3002/day';
// const getTime = require('../../Models/GetTime/index.js')

class CChart extends React.Component{
  state = [null]

  componentDidMount = () => {
    setInterval(()=>{
        axios.get(DateChart)
        .then(res => {
          let data = JSON.parse(res.data)
          let run = [];
          let time = [];
          console.log('chart:', data)
          for(let i =0;i<data.length;i++){
            const machineName = data[i].status
            const targetName = this.props.match.params.status
//             const machineName = data[i].machine
//             const targetName = this.props.match.params.machine
            run.push(data[i].run);
            time.push(data[i].day)
            // time.push(parseInt(data[i].day));
            if(machineName === targetName){
              data=(data[i])
            }
          }
          // console.log(run)
//           //filter harian **********************************
          // let now, baseFilter = '1M'; //1D,1M,1Y
          // if(baseFilter === '1D'){baseFilter = data.ddHistory;  now = getTime().dd}
          // if(baseFilter === '1M'){baseFilter = data.mmHistory;  now = getTime().mm}
          // if(baseFilter === '1Y'){baseFilter = data.yyHistory;  now = getTime().yy} 
          var d = new Date();
          var h = d.getHours(); 
          let newClockHistory = [], newRunHistory = []
          for(let i = 0; i<h.length; i++){
            if(h[i] === d){
              newClockHistory.push(data.h[i])
              newRunHistory.push(data.runHistory[i])
            }
          }
          data.h = newClockHistory
          // console.log(newClockHistory)
          data.runHistory = newRunHistory
//           //*********************************************** */

          this.setState(
            {   
          labels: time,
          datasets: [
            {
              label: "level of thiccness",
              data: run,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
            }
            )
        }
        )
    },1000)
  } 
  
  render(){
  return (
    <GraphPage value={this.state}  /> )
  }
}   
export default CChart;