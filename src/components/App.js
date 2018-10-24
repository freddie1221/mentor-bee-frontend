import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Register from "./Register";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import AllMentors from "./AllMentors";
import ProfilePage from "./ProfilePage";
import Profile from "./Profile";
import NavSignedIn from "./NavSignedIn";
import NavSignedOut from "./NavSignedOut";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false
    }
    this.returnNav = this.returnNav.bind(this)
    this.signedIn = this.signedIn.bind(this)
    this.signedOut = this.signedOut.bind(this)
  }

  signedIn() {
    this.setState({isSignedIn: true}) 
  }
  
  signedOut() {
    this.setState({isSignedIn: false}) 
  }
  
  componentDidMount() {
    if (window.localStorage.getItem("currentUser")) {
      this.setState({isSignedIn: true}) 
    } 
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
            <Route 
              exact path="/" 
              render={(props) => <Register {...props} signedIn={this.signedIn} />}
            />
            <Route 
              path="/sign-in"
              render={(props) => <SignIn {...props} signedIn={this.signedIn} />}
            />
            <Route 
              path="/sign-out"
              render={(props) => <SignOut {...props} signedOut={this.signedOut} />}
            />
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
