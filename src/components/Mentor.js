import React from "react";

class Mentor extends React.Component {
  render() {
    const userId = this.props.mentor.user_id
    const pic = this.props.mentor.pic
    const skill = this.props.mentor.skill
    const name = this.props.mentor.names

    return (
      <div>
        <a href={`/#mentors/${userId}`}>
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
