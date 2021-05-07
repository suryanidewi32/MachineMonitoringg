import Card from '../../Components/Card/Card'
import Button from '../../Components/Input/Button/Button'
import Form from '../../Components/Input/Form/Form'
import Gap from '../../Components/Input/Gap/Gap'
import React, {useState} from 'react'
import './ResetPassword.css'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import {Link, useHistory, useParams} from 'react-router-dom'
import M from 'materialize-css'

const Reset =()=> {
    const history = useHistory("")
    const [password,setPassword] = useState("")
    const [ConfirmPassword,setConfirmPassword]= useState("")
    const {resetToken} = useParams()


    const newPass =  (event)=>{
        event.preventDefault()
        fetch("http://192.168.254.106:3002/newpassword",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                ConfirmPassword,
                resetToken
        })
     }).then(res=>res.json())
    .then(data=>{
       if(data.error){
          console.log("try again!")
          console.log(password)
          console.log(ConfirmPassword)
          console.log(resetToken)

       }
       else{
           M.toast({html:data.message,classes:"#43a047 green darken-1"})
           history.push('/')
       }
    }).catch(err=>{
        console.log(err)
    })
}

    return(
        <div class="Form-header">
        <div class="atasReset">
        <Header></Header>
        </div>
            <Card Form={
                <div>
                    <div className="iconReset"  />
                    <Gap height={5}/>
                    <p className="title">Reset Password</p>
                    <Gap height={5}/>
                    <form onSubmit={newPass}>
                        <Form placeholder="New Password"  type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <Gap height={10}/>
                        <Form placeholder="Confirm New Password"  type="password" name="ConfirmPass" value={ConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        <Gap height={5}/>
                        <Button title="RESET PASSWORD" onClick={newPass}/>
                    </form>
                    <Gap height={30}/>
                    <div class="LinkReset">
                    <Link style={{  textDecoration: 'none', fontFamily: 'arial' }}>Terms of use. Privacy policy</Link>
                    </div>
                </div>
            }>
            </Card>
            <div class="footerReset"><Footer/></div>
        </div>
    )
    }

export default Reset