import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/shared/Navbar";

import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import CreateProjectFrom from './components/addproject/addprojectform'

function App() {
  return (
    <Router>
      <MyNavbar />

      {/**defining my routes */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addproject">
          <CreateProjectFrom/>
        </Route>
        <Route path="/dashboard">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
