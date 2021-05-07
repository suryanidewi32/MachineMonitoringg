import React from 'react';
import CardChart from '../../Components/CardChart/CardChart';
import Footer from '../../Components/Footer/Footer';

import './CardChartPage.css';

const CardChartPage = (props) => {
    var CardChartValue = {}
    let statusMachine = '';
    let statusColor = '';
    const Data = props.Data
    console.log(Data)
    // for (let i = 0; i < Data.length; i++) {
    //     if(Data[i].status==='RUN'){
    //         statusColor = 'green';
    //         statusMachine = 'RUN';
    //     }
    //     if(Data[i].status==='DOWN'){
    //         statusColor = 'red';
    //         statusMachine = 'DOWN';
    //     }
    //     if(Data[i].status==='IDLE') {
    //         statusColor = 'blue';
    //         statusMachine = 'IDLE';
    //     }
    if(Data.status==='Run'){
        statusColor = 'green';
        statusMachine ='RUN';
    }
    if(Data.status==='Down'){
        statusColor = 'red';
        statusMachine ='DOWN';
    }
    if(Data.status==='Idle'){
        statusColor = 'blue';
        statusMachine ='IDLE';
    }
       // CardChartValue.push(<CardChart key={i} machine={Data[i].machine} statusColor={statusColor} statusMachine={statusMachine} runtime={Data[i].runtime} downtime={Data[i].downtime} chartData={Data[i]}/>)
    
    return (
        <header>
          
          <div class="container2">
          {/* <div class="cardfull">{CardChartValue}  */}
          <div class="cardfull"><CardChart statusColor={statusColor} statusMachine={statusMachine} runtime={Data.runtime} downtime={Data.downtime} chartData={Data}/></div>
          </div>
          <div class="footer"><Footer/></div>
        </header>
    );
}
export default CardChartPage;