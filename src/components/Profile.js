import React, { Component } from "react"
import CreateProfile from "./CreateProfile"
import PersonalProfile from "./PersonalProfile"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profileExists: false
    }
    this.profileCreated = this.profileCreated.bind(this)
  }

  profileCreated(){
    this.setState({ profileExists: true })
  }

  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem("currentUser"))
    if ( user._mentorBio !== "" || user._menteeBio !== "") {
      this.setState({ profileExists: true })
    }
  }

      
  render() {

    if (this.state.profileExists) {
      return <PersonalProfile />
    } else {
      return <CreateProfile action={this.profileCreated}/>
    }
    
  }
}

export default Profile