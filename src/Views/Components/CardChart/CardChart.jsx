import './CardChart.css';
import {Link} from 'react-router-dom'

const CardChart=(props)=> {
  return (
    <header>
        <div className="chardrealtime" style={{backgroundColor: props.statusColor}}>
        {/* <div className="card-header">Machine {props.machine}
        <br/>
        <h6>{props.statusMachine}</h6></div>
        <div className="main-description"> */}
        <div className="card-header">Machine
        <br/>
        <h6>{props.statusMachine}</h6></div>
        <div className="main-description">
    
        <form>

        <div className="row">
        <div className="col-25">
        <label for="run">RUN TIME</label>
        </div> 

        <div className="col-75">
        <p type="text" id="run" >{props.runtime}</p>
        </div>
        </div>

        <div className="row">
        <div className="col-25">
        <label for="down">DOWN TIME</label>
        </div> 

        <div className="col-75">
        <p type="text" id="down" >{props.downtime}</p>
        </div>
        </div>
        </form>
        </div>
        {/* <Link to={`/Chart/${props.machine}`} params={props.chartData} style={{  textDecoration: 'none', fontFamily: 'sans-serif'}} className=""><b>Click To See Chart</b></Link> */}
        <Link to={`/Chart/${props.status}`} params={props.chartData} style={{  textDecoration: 'none', fontFamily: 'sans-serif'}} className=""><b>Click To See Chart</b></Link>
        
        </div>
 
      </header>
  );
}
export default CardChart;