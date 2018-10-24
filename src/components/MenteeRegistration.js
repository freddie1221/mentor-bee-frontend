import React, { Component } from "react";
import Textarea from 'react-textarea-autosize'
import { withRouter } from "react-router-dom";
import CurrentUser from "../CurrentUser"

class MenteeRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      interest: '',
      currentUser: JSON.parse(window.localStorage.getItem("currentUser"))

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
    const url = "https://mentor-bee-api.herokuapp.com/mentees"
    const data = { "mentee": {
      "user_id": this.state.currentUser._id,
      "bio": this.state.bio,
      "interest": this.state.interest
      }
    }
    console.log(data)

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { 
        "Authorization": this.state.currentUser._token,
        "Content-Type": "application/json" 
      }
    }).then(res => {
      if (res.ok){
        return res.json()
      }
    }).then(res => {
      let user = JSON.parse(window.localStorage.getItem("currentUser"))
      let updatedUser = new CurrentUser(user._id, user._name, user._email, user._token, '', '', res.mentee.bio, res.mentee.interest, res.mentee.mentee_id) 
      window.localStorage.setItem("currentUser", JSON.stringify(updatedUser))

    }).catch(err => {
      console.log(err)
    })
    event.preventDefault()
  }

  render() {
    return (
      <div className="profile-form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label>Bio</label>
          <Textarea
              className="bio"
              type="textArea"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
              required
              autoFocus
            /><br/>
            <label>Interest</label>
            <input
              type="text"
              name="interest"
              value={this.state.interest}
              onChange={this.handleChange}
              required
            /><br/>
            <button type="submit" className="signupbtn">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(MenteeRegistration)
