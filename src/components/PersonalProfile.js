import React, { Component } from "react"

class PersonalProfile extends Component {

  render () {
    let user = JSON.parse(window.localStorage.getItem("currentUser"))
    let mentorOrMentee;
    if (user._mentorBio !== "" && user._mentorBio !== null) {
      mentorOrMentee = (
        <span>
          <p>{user._mentorBio}</p>
          <p>Available to mentor in: </p>
          <ul>
            <li>{user._mentorSkill}</li>
          </ul>
        </span>
      )} else {
        mentorOrMentee = (
          <span>
            <p>{user._menteeBio}</p>
            <p>Looking to gain skills in: </p>
            <ul>
              <li>{user._menteeInterest}</li>
            </ul>
          </span>
      )}

    return (
      <div className="profilePage-wrapper">
        <p className="profile-title">{user._name}'s Profile</p>
        <img className="profile-pic" alt="profile-pic" src={user._pic}></img>
        <div className="profile-body">
          <p className="subtitle"> About</p>
          {mentorOrMentee}
        </div>
      </div>
    )
  }
}

export default PersonalProfile
