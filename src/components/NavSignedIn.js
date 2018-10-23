import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import bee from '../bee.svg';

class NavSignedIn extends Component {


  logOut() {
    window.localStorage.clear()
  }


  render() {
    return(
      <ul className="header">
          <h1 id="nav-title">MentorBee</h1>
          <img src={bee} className="App-logo" alt="logo" />
          <li onClick={this.logOut}><NavLink to="/sign-in">Sign out</NavLink></li>
          <li id="profile-nav"><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/mentors">Mentors</NavLink></li>
      </ul>
    )
  }
}

export default NavSignedIn;
