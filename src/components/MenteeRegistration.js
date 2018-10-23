import React, { Component } from "react";
import Textarea from 'react-textarea-autosize'

class MenteeRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      interest: '',

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
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
    event.preventDefault()
  }

  render() {
    return (
      <div className="profile-form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label for="name">Bio</label>
          <Textarea
              className="bio"
              type="textArea"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
              required
              autoFocus
            /><br/>
            <label for="interest">Skill</label>
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

export default MenteeRegistration