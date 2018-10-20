import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import bee from './bee.svg';
import Register from "./Register";
import AllMentors from "./AllMentors";
import ProfilePage from "./ProfilePage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <h1 id="nav-title">MentorBee</h1>
            <img src={bee} className="App-logo" alt="logo" />
            <li><NavLink exact to="/">Register</NavLink></li>
            <li><NavLink to="/mentors">Mentors</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Register}/>
            <Route exact path="/mentors" component={AllMentors}/>
            <Route path="/mentors/:id" component={ProfilePage}/>
          </div>

        </div>
      </HashRouter>
    );
  }
}
export default App;