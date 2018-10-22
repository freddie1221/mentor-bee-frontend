import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Register from "./Register";
import AllMentors from "./AllMentors";
import ProfilePage from "./ProfilePage";
import Profile from "./Profile";
import NavSignedIn from "./NavSignedIn";
import NavSignedOut from "./NavSignedOut";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: window.localStorage.getItem("currentUser")
    }
    this.returnNav = this.returnNav.bind(this)
  }

  returnNav() {
    if (this.state.isSignedIn) {
      return <NavSignedIn />
    } else {
      return <NavSignedOut />
    }
  }

  render() {
    return (
      <HashRouter>
        <div>
          {this.returnNav()}
          <div className="content">
            <Route exact path="/" component={Register}/>
            <Route exact path="/mentors" component={AllMentors} onEnter={() => this.returnNav()}/>
            <Route path="/mentors/:id" component={ProfilePage}/>
            <Route path="/profile" component={Profile}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
