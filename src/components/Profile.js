import React, { Component } from "react"
import CreateProfile from "./CreateProfile"
import PersonalProfile from "./PersonalProfile"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMentor: true,
      isMentee: false
    }
    this.isNotMenteeOrMentor = this.isNotMenteeOrMentor.bind(this)
  }

  isNotMenteeOrMentor() {
    if (this.state.isMentor === false && this.state.isMentor === false) {
      return <CreateProfile />
    }
    return <PersonalProfile />
  }
        
  render() {
    return (
      <div>
        {this.isNotMenteeOrMentor()}
      </div>
    )
  }
}

export default Profile