import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import bee from '../bee.svg';

class NavSignedIn extends Component {


  logOut() {
    window.localStorage.clear()
  }
// onClick={this.logOut}

  render() {
    return(
      <ul className="header">
        <h1 id="nav-title">MentorBee</h1>
        <img src={bee} className="App-logo" alt="logo" />
        <li><NavLink to="/sign-out">Sign out</NavLink></li>
        <li id="profile-nav"><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/mentors">Mentors</NavLink></li>
      </ul>
    )
  }
}

export default NavSignedIn;
