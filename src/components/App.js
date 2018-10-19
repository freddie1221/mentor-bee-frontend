import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import bee from '../bee.svg';
import Register from "./Register";
import AllMentors from "./AllMentors";
import ProfilePage from "./ProfilePage";
import Profile from "./Profile";

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
            <li><NavLink exact to="/">Register</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/mentors">Mentors</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Register}/>
            <Route exact path="/mentors" component={AllMentors}/>
            <Route path="/mentors/:id" component={ProfilePage}/>
            <Route path="/profile" component={Profile}/>
          </div>

        </div>
      </HashRouter>
    );
  }
}
export default App;