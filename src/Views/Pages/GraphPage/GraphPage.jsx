import Gap from '../../Components/Input/Gap/Gap'
import React, {Component} from 'react'
import Footer from '../../Components/Footer/Footer'
import Graph from '../../Components/Graph/Graph'
import CurrentTime from '../../Components/CurrentTime/CurrentTime'
import './GraphPage.css'


class GraphPage extends Component {  
    render(){
    return(
        <div>
        <CurrentTime></CurrentTime>

        <Gap height={30}/>

       <div className="GraphStyle">
        <Graph value={this.props.value}></Graph>
        </div>

        <Gap height={60}/>
        
        <div className="footerGraph">
        <Footer></Footer>
        </div>
        </div>
    )}
    }
export default GraphPage;