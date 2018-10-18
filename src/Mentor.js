import React from "react";
import ProfilePage from "./ProfilePage";

class Mentor extends React.Component {
  render() {
    const name = this.props.mentor.name
    const pic = this.props.mentor.pic
    const skills = this.props.mentor.skills
    const id = this.props.mentor.id

    return (
      <div>
        <a href={`/#mentors/${id}`}>
          <div className="card">
            <img alt="profile-pic" className="profile-pic" src={pic}></img>
            <p className="card-name">{name}</p>
            <p className="card-skills"><span className="skills-title">Available to mentor in:</span> {skills}</p>
          </div>
        </a>
      </div>
    )
  }
}

export default Mentor;
