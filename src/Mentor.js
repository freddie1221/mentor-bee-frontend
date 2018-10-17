import React from "react";

class Mentor extends React.Component {
  render() {
    const name = this.props.mentor.name
    const pic = this.props.mentor.pic

    return (
      <div>
        <div className="card">
          <p>{name}</p>
          <img src={pic}></img>
        </div>
      </div>
    )
  }
}

export default Mentor;
