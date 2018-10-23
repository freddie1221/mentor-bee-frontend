import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
    // TODO connect to API
    event.preventDefault()
  }

  render() {
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


export default SignIn;
