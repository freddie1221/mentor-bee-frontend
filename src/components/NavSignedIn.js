import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import bee from '../bee.svg';

class NavSignedIn extends Component {
  render() {
    return(
      <ul className="header">
            <h1 id="nav-title">MentorBee</h1>
            <img src={bee} className="App-logo" alt="logo" />
            <li id="profile-nav"><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/mentors">Mentors</NavLink></li>
      </ul>
    )
  }
}

export default NavSignedIn;