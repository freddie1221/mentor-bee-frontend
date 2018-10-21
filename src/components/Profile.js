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
      mentorForm: <MentorRegistration />,
      menteeForm: ''
    })
  }

  mentee() {
    this.setState({
      menteeForm: <MenteeRegistration />,
      mentorForm: ''
    })
  }


  render () {
    return (
      <div className="profile-wrapper">
        <form>
          <button onClick={this.mentor}>Become a mentor</button>
          {this.state.mentorForm}
        </form>
        <form>
        <button onClick={this.mentee}>Become a mentee</button>
          {this.state.menteeForm}
        </form>
      </div>
    )
  }

}

export default Profile;