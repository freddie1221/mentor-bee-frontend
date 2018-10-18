import React from "react";

class Mentor extends React.Component {
  render() {
    const name = this.props.mentor.name
    const pic = this.props.mentor.pic
    const skills = this.props.mentor.skills

    return (
      <div>
        <div className="card">
          <img alt="profile-pic" className="profile-pic" src={pic}></img>
          <p className="card-name">{name}</p>
          <p className="card-skills"><span className="skills-title">Available to mentor in:</span> {skills}</p>
        </div>
      </div>
    )
  }
}

export default Mentor;
