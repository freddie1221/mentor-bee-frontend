import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import bee from '../bee.svg';

class NavSignedOut extends Component {
  render() {
    return(
      <ul className="header">
            <h1 id="nav-title">MentorBee</h1>
            <img src={bee} className="App-logo" alt="logo" />
            <li><NavLink exact to="/">Register</NavLink></li>
      </ul>
    )
  }
}

export default NavSignedOut;