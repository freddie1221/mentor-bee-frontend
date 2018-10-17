import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import bee from './bee.svg';
import SignIn from "./SignIn";
import Register from "./Register";
import AllMentors from "./AllMentors";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Mentor Bee</h1>
          <div className="bee">
            <img src={bee} className="App-logo" alt="logo" />
          </div>
          <ul className="header">
            <li><NavLink exact to="/">Sign in</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            
          </ul>
          <div className="content">
            <Route exact path="/" component={SignIn}/>
            <Route path="/register" component={Register}/>
            <Route path="/mentors" component={AllMentors}/>
          </div>
       
        </div>
      </HashRouter>
    );
  }
}
export default App;


