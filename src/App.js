import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/shared/Navbar";

import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route ,Switch} from "react-router-dom";

import Home from "./components/home/home";
import CreateProjectFrom from "./components/addproject/addprojectform";
import AddProjectTask from "./components/projectBoard/projecttasks/addProjectForm"
import UpdateProjectFrom from './components/updateproject/updateproject'
import ProjectBoard from './components/projectBoard/projectboard'
import { Provider } from "react-redux";
import store from "./store";
import UpdateProjectTaskForm from "./components/projectBoard/projecttasks/updateProjectTaskForm";

import LandingPage from './components/auth/landingpage'
import jwt_decode from 'jwt-decode'
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./redux/action/types";
import { logout } from "./redux/action/securityActions";
import SecureRoutes from "./securityUtils/secureroutes";


const jwtToken = localStorage.jwtToken ; 
if ( jwtToken){
  setJWTToken(jwtToken)
  const decode_jwtToken = jwt_decode(jwtToken) ; 
  store.dispatch({
    type: SET_CURRENT_USER,
      payload: decode_jwtToken
  })
  const currentTime = Date().now() /1000 ;
  if (decode_jwtToken.exp<currentTime){
   
   // handle logout
    
    store.dispatch(logout())
    window.location.href ="/"
  }

}


function App() {
  return (
    <Provider 
    store={store}
    >
      <Router>
        <MyNavbar />

        {
          //public routes
        }

        {
          //private routes
        }

        {/**defining my routes */}
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <SecureRoutes exact path="/addproject">
            <CreateProjectFrom />
          </SecureRoutes>
          <SecureRoutes exact path="/dashboard">
            <Home />
          </SecureRoutes>
          <SecureRoutes  exact path="/updateproject/:id">
            <UpdateProjectFrom />
          </SecureRoutes>
          <SecureRoutes exact path = '/projectBoard/:id' component={ProjectBoard}/>
          <SecureRoutes exact path ='/addprojecttask/:id' component={AddProjectTask} />
          <SecureRoutes exact path ='/updateprojecttask/:backlog_id/:projecttaskid' component = { UpdateProjectTaskForm }/>
        
        
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
