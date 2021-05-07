import React from 'react';
import {Route, Redirect} from 'react-router-dom'

// function ProtectedRoutes({ isAuth: IsAuth, component: Component, ...rest}){
//     return(
//           <Route 
//           {...rest} 
//           render={(props) => {
//             if (IsAuth) {
//                 return <Component/>
//             }else{
//                 return <Redirect to={{pathname: '/', state: {from: props.location}}} />;
//             }
//         }}/>
//     )}

// export default ProtectedRoutes;

const ProtectedRoutes= 
{isAuthenticated: false,authenticate() 
{this.isAuthenticated = true;},

signout() {this.isAuthenticated = false;},
getAuth() {return this.isAuthenticated;}};
export default ProtectedRoutes;