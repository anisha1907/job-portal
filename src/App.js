import React from 'react';
import SignUp from "./components/SignUp";
import Login from "./components/login";
import NavBar from "./components/NavBar";
import ResetPass from "./components/ResetPass";
import RecruiterForm from "./components/RecruiterForm";
import JobDetail from "./components/JobDetail"
import Home from "./components/Home";
import Profile from "./components/Profile";
import {Route, Link} from "react-router-dom";
function App() {
  return (
    <div class="App">
    
      <Route exact path="/" component={Login}/>
      <Route exact path="/SignUp" component={SignUp}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/ResetPass" component={ResetPass}/>
      <Route exact path="/RecruiterForm" component={RecruiterForm}/>
      <Route exact path="/JobDetail" component={JobDetail}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Profile" component={Profile}/>

    </div>
  );
}

export default App;
