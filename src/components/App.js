import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Register from "./Register";
import SignIn from "./SignIn";
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
            <Route path="/sign-in" component={SignIn}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
