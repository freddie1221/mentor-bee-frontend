import React from "react";

class Mentor extends React.Component {
  render() {
    const mentorId = this.props.mentor.mentor_id
    const pic = this.props.mentor.pic
    const skill = this.props.mentor.skill
    const name = this.props.mentor.name

    return (
      <div>
        <a href={`/#mentors/${mentorId}`}>
          <div className="card">
            <img alt="profile-pic" className="profile-pic" src={pic}></img>
            <div className="card-desc">
              <p className="card-name">{name}</p>
              <p className="card-skills"><span className="skills-title">Available to mentor in:</span> {skill}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default Mentor;
