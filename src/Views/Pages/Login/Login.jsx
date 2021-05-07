import React,{useState,useContext,} from 'react'
import Card from '../../Components/Card/Card'
import Button from '../../Components/Input/Button/Button'
import Gap from '../../Components/Input/Gap/Gap'
import {Link, useHistory} from 'react-router-dom'
import Header from '../../Components/Header/Header';
import './Login.css'
import Footer from '../../Components/Footer/Footer'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import {UserContext} from '../../../Config/Routes/Routes'
import ProtectedRoutes from '../../../Config/Routes/ProtectedRoutes'
import CurrentTime from '../../Components/CurrentTime/CurrentTime'

const Login = (props) => {
   
    const {state,dispatch} = useContext(UserContext)  
    const history = useHistory()
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const SignIn =  async(event) =>{
        event.preventDefault()
        ProtectedRoutes.authenticate();
        // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        //     M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
        //     return
        // }
        // axios.post(user)
        fetch('/signin',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fullName,
                password
            })
        
        })
        .then(res=>res.json())
        .then(data=>{
          
           if(data.error){
             console.log(data.error)
           }
           else{
               localStorage.setItem("jwt",data.resetToken)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               const user = (data.fullName);
               history.push(`/home/${user}`)
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    
  
    return(
        
        <div className="Form-header">
           
            <div className="atasLogin">
            <Header></Header>
            </div>

            <Card Form={
                <div>
                    <Gap height={2}/>
                    <p className="title">Login to your account and get connected!</p>
              
                    
                    <p className="title">Login</p>

                    <form onSubmit={SignIn}>
                        <Gap height={2}/>
                        <div style={{display:'flex'}} className="form-insert" >
                        <input style={{border:'none',  background: 'none', paddingLeft:'5px', color: 'white'}} placeholder="Username" name="fullName" 
                        onChange={(e)=>setFullName(e.target.value)}/>
                        <AccountCircle style={{color:'white', paddingLeft:'85px'}} /> 
                        </div>

                        <Gap height={5}/> 
                        <div style={{display:'flex'}} className="form-insert">
                        <input style={{border:'none',  background: 'none', paddingLeft:'5px',  color: 'white'}} placeholder="Password" name="password"  type="password"  
                        onChange={(e)=>setPassword(e.target.value)}/> 
                        <Lock style={{color:'white' , paddingLeft:'85px'}} />  
                        </div>
                        <Gap height={10}/>
                        <Button type="submit" title="LOGIN"  onClick={SignIn}/>
                    </form>

                    <div className="LinkLogin">
                    <Link to={'/forgot'} style={{  textDecoration: 'none', color:'grey'}} className=""><b>Forget your password?</b></Link>
                    <br/>
                    <Link to={'/register'} style={{  textDecoration: 'none', fontFamily: 'sans-serif'}} className="">Forgot your login details? <b>Get help Signing in.</b></Link>
                    <Gap height={5}/>
                    <Link to={'/register'} style={{  textDecoration: 'none', fontFamily: 'sans-serif'}} className="">Don't have an account? <b>Sign Up.</b></Link>
                    <br></br>
                    <Link style={{  textDecoration: 'none', fontFamily: 'arial' }}>Terms of use. Privacy policy</Link>
                    
                    </div>              
                </div>
            }>
            </Card>

            <div className="footerLogin"><Footer/></div>
            <div>
          
        </div>

        </div>
        
    )
        }

 export default Login;
