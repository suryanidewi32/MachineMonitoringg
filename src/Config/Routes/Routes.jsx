import React,{createContext,useState,useReducer,useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory, Redirect } from 'react-router-dom'
import {CForgot, CLogin, CCard, CReset} from '../../Controllers'
import CAlert from '../../Controllers/Alert'
import CChart from '../../Controllers/Chart'
import CRegister from '../../Controllers/Register'
import {reducer,initialState} from '../Redux/Reducer'
import ProtectedRoutes from './ProtectedRoutes'
export const UserContext = createContext()

    const Routing = (props)=>{
        const history = useHistory()
  return(
    <Switch>
                  <Route path="/success" component={CAlert}/>
                  {/* <Route path="/Chart/:machine" component={CChart}/> */}
                  <Route path="/resetPass/:resetToken" component={CReset}/>
                  {/* <Route exact path="/home" component={CCard}/> */}
                  <PrivateRoute path="/home/:user" component={CCard}/>
                  <PrivateRoute path="/Chart/:machine" component={CChart}/>
                  <Route path="/forgot" component={CForgot}/>
                  <Route path="/register" component={CRegister}/>
                  <Route path="/" component={CLogin}/>
              </Switch>
               )
            }

            const PrivateRoute = ({ component: Component, ...rest }) => (
              <Route
              {...rest}
              render={props =>
                ProtectedRoutes.getAuth() ? (
                <Component {...props} />
                ) : (
                <Redirect to={{pathname: "/"}}/>
                )}
                />
                );
     
     
              function Routes() {
        const [state,dispatch] = useReducer(reducer,initialState)
        return (
          <UserContext.Provider value={{state,dispatch}}>
          <Router>
            <Routing />
          </Router>
          </UserContext.Provider>
        );
     }
export default Routes;