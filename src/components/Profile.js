import React, { Component } from "react"
import CreateProfile from "./CreateProfile"
import PersonalProfile from "./PersonalProfile"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mentorBio: "",
      menteeBio: ""
    }
    this.isNotMenteeOrMentor = this.isNotMenteeOrMentor.bind(this)
    this.currentUser = this.currentUser.bind(this)
  }

  
  currentUser() {
    this.setState({
      mentorBio: JSON.parse(window.localStorage.getItem("currentUser"))._menteeBio,
      menteeBio: JSON.parse(window.localStorage.getItem("currentUser"))._mentorBio
    })
  }


  isNotMenteeOrMentor() {
    if (this.state.mentorBio === "" && this.state.menteeBio === "") {
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