import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import CurrentUser from "../CurrentUser"

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    this.setState({
        [target.name]: target.value
    })
  }
  handleSubmit(event) {
    const url = "https://mentor-bee-api.herokuapp.com/login"
    const data = {
      "email": this.state.email,
      "password": this.state.password
    }
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      if (res.ok){
        return res.json()
      }
    }).then(res => {
      this.props.signedIn()
      let user = new CurrentUser(res.user_id, res.user_name, res.user_email, res.auth_token)
      window.localStorage.setItem("currentUser", JSON.stringify(user))
      this.setState({ redirect: true });
    }).catch(err => {
      console.log(err)
    })
    event.preventDefault()
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/profile'/>;
    }
    return (
      <div className="clearfix">
        <div className="title-box">
          <h3 id="signup-title">Welcome to MentorBee.</h3>
          <br/><p id="tagline">Please sign in</p>
        </div>
        <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            /><br/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            /><br/>
              <button type="submit" className="signupbtn">Sign in</button>
        </form>
      </div>
    );
  }
}


export default withRouter(SignIn);
