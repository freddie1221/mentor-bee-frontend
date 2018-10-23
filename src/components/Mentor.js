import React from "react";

class Mentor extends React.Component {
  render() {
    const userId = this.props.mentor.user_id
    const pic = this.props.mentor.pic
    const skill = this.props.mentor.skill
    const id = this.props.mentor.id

    return (
      <div>
        <a href={`/#mentors/${userId}`}>
          <div className="card">
            <img alt="profile-pic" className="profile-pic" src={pic}></img>
            <div className="card-desc">
              <p className="card-name">{userId}</p>
              <p className="card-skills"><span className="skills-title">Available to mentor in:</span> {skill}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default Mentor;
