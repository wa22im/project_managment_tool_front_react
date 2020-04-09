import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/shared/Navbar";

import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/home";
import CreateProjectFrom from "./components/addproject/addprojectform";
import AddProjectTask from "./components/projectBoard/projecttasks/addProjectForm"
import UpdateProjectFrom from './components/updateproject/updateproject'
import ProjectBoard from './components/projectBoard/projectboard'
import { Provider } from "react-redux";
import store from "./store";
import UpdateProjectTaskForm from "./components/projectBoard/projecttasks/updateProjectTaskForm";


function App() {
  return (
    <Provider 
    store={store}
    >
      <Router>
        <MyNavbar />

        {/**defining my routes */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addproject">
            <CreateProjectFrom />
          </Route>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route  exact path="/updateproject/:id">
            <UpdateProjectFrom />
          </Route>
          <Route exact path = '/projectBoard/:id' component={ProjectBoard}/>
          <Route exact path ='/addprojecttask/:id' component={AddProjectTask} />
          <Route exact path ='/updateprojecttask/:backlog_id/:projecttaskid' component = { UpdateProjectTaskForm }/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
