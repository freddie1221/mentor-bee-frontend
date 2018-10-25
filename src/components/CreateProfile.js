import React, { Component } from "react";
import MentorRegistration from './MentorRegistration'
import MenteeRegistration from './MenteeRegistration'

class Profile extends Component {

  constructor(props){
    super(props)
    this.state = {
      mentorCreateUrl: 'https://mentor-bee-api.herokuapp.com/mentors',
      menteeCreateUrl: 'https://mentor-bee-api.herokuapp.com/mentees',
      mentorForm: '',
      menteeForm: ''
    }
    this.mentor = this.mentor.bind(this)
    this.mentee = this.mentee.bind(this)
  }
  
  mentor() {
    this.setState({
      mentorForm: <MentorRegistration action={this.props.action}/>,
      menteeForm: ''
    })
  }

  mentee() {
    this.setState({
      menteeForm: <MenteeRegistration action={this.props.action}/>,
      mentorForm: ''
    })
  }

  render () {
    return (
      <div className="profile-wrapper">
        <button onClick={this.mentor}>Become a mentor</button>
        {this.state.mentorForm}
        <button onClick={this.mentee}>Become a mentee</button>
        {this.state.menteeForm}
      </div>
    )
  }
}

export default Profile;