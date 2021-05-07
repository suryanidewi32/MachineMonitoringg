import CardChartPage from "../../Views/Pages/CardChartPage/CardChartPage"
import React from 'react';
import axios from 'axios';
import CurrentTime from '../../Views/Components/CurrentTime/CurrentTime';
const API = 'http://192.168.254.106:3002'//601cfed97a58e42adc49dd27

class CHome extends React.Component{
    state ={
        data : {
            // machine: "hardford",
            status: 0,
            runtime: 0,
            downtime: 0,
            idletime:0,
        }, 
        fullName: this.props.match.params.user,
    }
    componentDidMount = () => {
        setInterval(()=>{
            axios.get(API)
            .then(res => {
            const data = JSON.parse(res.data);
            this.setState({data});
            // console.log(this.state)
            }
            )
        },1000)
    }
    render(){
        return(
        <div>
            <CurrentTime user={this.state.fullName}/>
            <CardChartPage Data={this.state.data}/>
            
        </div>
        )
    }  
}
export default CHome

// import { Component } from 'react';
// import CardChartPage from "../../Views/Pages/CardChartPage/CardChartPage"

// class CHome extends Component {
//   render(){
//   return(
//       <CardChartPage/>
//   )
//   }
// }

// export default CHome;