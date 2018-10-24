import React, { Component } from "react"
import CreateProfile from "./CreateProfile"
import PersonalProfile from "./PersonalProfile"

class Profile extends Component {




  isNotMenteeOrMentor() {
    const user = JSON.parse(window.localStorage.getItem("currentUser"))
    if (user._menteeBio === "" && user._mentorBio === "") {
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