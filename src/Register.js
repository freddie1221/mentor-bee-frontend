import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation:''
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
      <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          /><br/>
          <input
            type="email"
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
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Re-enter password"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
            required
          /><br/>
          
          <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
      </form>
    );
  }
}



export default Register;

