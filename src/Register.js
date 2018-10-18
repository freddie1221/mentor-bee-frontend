import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
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
    const url = "https://mentor-bee.herokuapp.com/users"
    const data = { "user": {
      "name": this.state.name,
      "email": this.state.email,
      "password": this.state.password
      }
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok){
        return res.json()
      } else {
        throw new Error ("Error: unable to register")
      }
    })

    this.props.history.push("/mentors");
    event.preventDefault()
  }

  render() {
    return (
      <div className="clearfix">
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
              <button type="submit" className="signupbtn">Sign Up</button>
        </form>
      </div>
    );
  }
}



export default withRouter(Register);
