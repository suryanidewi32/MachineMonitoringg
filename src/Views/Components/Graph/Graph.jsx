import './Graph.css'
import React, {Component} from 'react'
import { Line } from "react-chartjs-2/es";
import Gap from '../../Components/Input/Gap/Gap'
import { withRouter } from 'react-router';
import {  exportComponentAsPNG } from 'react-component-export-image';
// import {DateRangePickerCalendar} from 'react-nice-dates';
import Modall from '../Modal/Modal';

class Graph extends Component{
	constructor(props) {
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.componentRef = React.createRef();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        // console.log(this.props.value)
    }
    showModal = () => {
      this.setState({ show: true });
    };
    hideModal = () => {
      this.setState({ show: false });
    };
    handleSubmit = () =>{
        this.props.history.push('/home');
    }
    render (){
  return (
     
    <header>
        <div>
        <button onClick={this.handleSubmit} class="buttonBack">BACK</button>
         <button class="buttonPNG" onClick={() => exportComponentAsPNG(this.componentRef, { })}>
         Export As PNG
       </button>
        </div>

        <div className="ButtonItem">
        <button className="buttonRight">1D</button>{' '}
        <button className="buttonRight">1W</button>{' '}
        <button className="buttonRight">1M</button>{' '}
        <button className="buttonRight">3M</button>{' '}
        <button className="buttonRight">1Y</button>{' '}
        <button className="buttonDate" onClick={this.showModal}>Time Range</button>
        <Modall show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modall>
        </div>

        <Gap height={50}/>

        <div class="chartLine" ref={this.componentRef}>
			<Line 
			data={this.props.value
			}
			options={{
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}				
			}}
			/>
        </div>



    </header>
  );
}
}
export default withRouter(Graph)

