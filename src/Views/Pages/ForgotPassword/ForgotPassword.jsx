import React, {useState} from 'react'
import Card from '../../Components/Card/Card'
import Button from '../../Components/Input/Button/Button'
import Form from '../../Components/Input/Form/Form'
import Gap from '../../Components/Input/Gap/Gap'
import './ForgotPassword.css'
import {Link, useHistory} from 'react-router-dom'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'
import M from 'materialize-css'

const ForgotPassword = () => {
    const history = useHistory("")
    const [email,setEmail] = useState("")

    const resetPass =  async(event)=>{
        event.preventDefault()
        // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        //     M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
        //     return
        // }
        // axios.post('/signup')
        fetch('/reset-password',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
            email
        })
     }).then(res=>res.json())
    .then(data=>{
       if(data.error){
          M.toast({html: data.error,classes:"#c62828 red darken-3"})
       }
       else{
           M.toast({html:data.message,classes:"#43a047 green darken-1"})
           history.push('/success')
       }
    }).catch(err=>{
        console.log(err)
    })
}
   

    return(

         <div class="Form-header">
           
            <div class="atasPassword">
            <Header></Header>
            </div>

            <Card Form={
                <div>
                    <Gap height={100}/>
                    <p className="title">Access Your Account</p>
                    <Gap height={40}/>
                    <form onSubmit={resetPass}>
                        <Form placeholder="Email" name="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <Gap height={33}/>
                        <Button title="SEND EMAIL" onClick={resetPass}/>
                    </form>
                    <div class="LinkPassword">
                    <Link  to={'/'} style={{  textDecoration: 'none', fontFamily: 'sans-serif'}}><b>Back to login.</b></Link>
                    <Gap height={30}/>
                    <Link style={{  textDecoration: 'none', fontFamily: 'arial' }}>Terms of use. Privacy policy</Link>
                    </div>

                </div>
            }>

            </Card>
            <div class="footerPassword"><Footer/></div>
        </div>

    )
}

export default ForgotPassword