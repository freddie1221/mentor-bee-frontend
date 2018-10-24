import React, { Component } from "react"

class PersonalProfile extends Component {

  render () {
    let user = JSON.parse(window.localStorage.getItem("currentUser"))
    return (
      <div className="profilePage-wrapper">
        <p className="profile-title">{user._name}s Profile</p>
        <img className="profile-pic" alt="profile-pic" src={user._pic}></img>
        <div className="profile-body">
          <p className="subtitle"> About</p>
          <p>{user._mentorBio}</p>
          <p>Available to mentor in: </p>
          <ul>
            <li>{user._mentorSkill}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PersonalProfile
