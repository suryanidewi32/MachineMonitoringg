import Card from '../../Components/Card/Card'
import Button from '../../Components/Input/Button/Button'
import Form from '../../Components/Input/Form/Form'
import Gap from '../../Components/Input/Gap/Gap'
import React, {useState} from 'react'
import './Register.css'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css'
// import {connect} from 'react-redux';
// import { registerUserAPI } from '../../../Config/Redux/Action'

const Register = () => {
    const history = useHistory("")
    const [fullName,setfullName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [ConfirmPassword,setConfirmPassword]= useState("")
    const PostData =  async(event)=>{
        event.preventDefault()
        // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        //     M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
        //     return
        // }
        // axios.post('/signup')
        fetch('/signup',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
            fullName,
            email,
            password,
            ConfirmPassword
        })
     }).then(res=>res.json())
    .then(data=>{
       if(data.error){
          M.toast({html: data.error,classes:"#c62828 red darken-3"})
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
        <div class="atasRegister">
        <Header></Header>
        </div>

            <Card Form={
                <div>
                    <p className="title">Create Account</p>
                    <form onSubmit={PostData}>
                        <Form placeholder="Name" name="fullName" value={fullName} onChange={(e)=>setfullName(e.target.value)}/>
                        <Gap height={10}/>
                        <Form placeholder="Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <Gap height={10}/>
                        <Form placeholder="Password" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <Gap height={10}/>
                        <Form placeholder="Confirm Password" type="password" name="ConfirmPassword" value={ConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        <div className="checkbox-agreement">
                            <input type="checkbox" name="agreement" />
                            <label>I agree all statements in terms of service</label>
                        </div>
                        <Gap height={5}/>
                        <Button title="SIGN UP"  onClick={PostData}/>
                    </form>
                    <div className="text">Already have an account?</div>
                    <div class="LinkRegister">
                    <Link to={'/'} style={{  textDecoration: 'none', fontFamily: 'sans-serif'}} className=""><b>Sign in</b></Link>
                    <Gap height={5}/>
                    <Link style={{  textDecoration: 'none', fontFamily: 'arial' }}>Terms of use. Privacy policy</Link>
                    </div>
                </div>
            }>

            </Card>
            <div class="footerRegister"><Footer/></div>
        </div>
    )
    
    }


// const reduxState =(state)=>({
//     isLoading: state.isLoading
// })

// const reduxDispatch = (dispatch) => ({
//     registerAPI: (data) => dispatch(registerUserAPI(data))
// })
export default Register;