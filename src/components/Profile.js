import React, { Component } from "react";

class Profile extends Component {

  constructor(props){
    super(props)
    this.state = {
      mentorCreateUrl: 'https://mentor-bee-api.herokuapp.com/mentors',
      menteeCreateUrl: 'https://mentor-bee-api.herokuapp.com/mentees'
    }
  }

  render () {
    return (
      <div className="profile-wrapper">
        <form>
          <button>Become a mentor</button>
        </form>
        <form>
          <button>Become a mentee</button>
        </form>
      </div>
    )
  }


}

export default Profile;