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
    if (window.localStorage.getItem("currentUser")) {
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