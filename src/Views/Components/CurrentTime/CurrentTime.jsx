import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import './CurrentTime.css';
import ProtectedRoutes from '../../../Config/Routes/ProtectedRoutes'
import {UserContext} from '../../../Config/Routes/Routes'
// let user = '';

const CurrentTime=(props)=> {
  const user = props.user
  // if(props.user !== null){user = props.user}
  console.log(user)
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date(),
    date = days[today.getDay()] + ', ' + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear() + ' ';



    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }

    const currentTime = formatAMPM(today);

    const currentDateTime = date;
    

  
   
    // const [data, setDatas] = useState([]);

    // useEffect(() => {
    //     axios.get('http://192.168.254.101:5000/protected').then(res => {
    //         console.log(res)  
    //         setDatas(res.data) 
    //     });
    // }, []);
    

  

    return (
      <header>
      <div class="card-group2">
      <div class="cardUser">  
      <div>
        <br/>
      {/* <b>Welcome, {props.fullName}!</b> */}
<b>Welcome,</b>
      <div class="dropdown" >
      <button class="dropbtn"><b>{user}</b></button>
      <div class="dropdown-content" >
      <button class="dropdown-content" onClick={()=>{
        ProtectedRoutes.signout();
      localStorage.clear()
      dispatch({type:"CLEAR"})
      history.push('/')
      }}>
        Logout</button>
      </div>
      </div>
           

      </div>
      </div>
      <div class="cardTime">
      <div>
      <p><b>
          { currentDateTime }
          <br/>  <br/>
          { currentTime }
          </b>  
        </p>
      </div>
      </div>
      </div>
      </header>
        );

      }
export default CurrentTime;