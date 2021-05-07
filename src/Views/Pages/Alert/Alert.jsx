import React, { Component } from 'react'
import CardReset from '../../Components/CardReset/CardReset'
import Header from '../../Components/Header/Header'
import Gap from '../../Components/Input/Gap/Gap'
import Footer from '../../Components/Footer/Footer'
import './Alert.css'

class Alert extends Component {
    render(){
        return(
        <div class="Form-header">
            <div className="atasAlert">
            <Header></Header>
            </div>

            <CardReset Card={
                <div>
                    <div  className="iconCheck"/>
                    <p style={{color: 'black', textAlign:'center', fontStyle:'Futura Md BT', fontSize:'31px'}}>Congratulations!</p>
                    <p style={{color: 'black', textAlign:'center',  fontStyle:'Futura Md BT', fontSize:'18px'}}>A password-reset link has been sent to your email address</p>
                </div>
            }>
            </CardReset>

            <div className="footerAlert"><Footer/></div>


        </div>
        )
    }
}
export default Alert