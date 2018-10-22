import React, { Component } from "react";
import Textarea from 'react-textarea-autosize'
import { withRouter } from "react-router-dom";

class MentorRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      skill: '',
      currentUserId: JSON.parse(window.localStorage.getItem("currentUser"))._id
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
    const url = "https://mentor-bee-api.herokuapp.com/mentors"
    const data = { "mentor": {
      "user_id": this.state.currentUserId,
      "bio": this.state.bio,
      "skill": this.state.skill
      }
    }
    
    console.log(data)
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      if (res.ok){
        return res.json()
      }
    }).then(res => {
      this.props.history.push("/mentors");
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
              value={this.state.name}
              onChange={this.handleChange}
              required
              autoFocus
            /><br/>
            <label for="skill">Skill</label>
            <input
              type="text"
              name="skill"
              value={this.state.email}
              onChange={this.handleChange}
              required
            /><br/>
            <button type="submit" className="signupbtn">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(MentorRegistration)