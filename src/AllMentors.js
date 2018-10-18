import React, { Component } from "react";
import Mentor from "./Mentor";

class AllMentors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mentors: []
    }
  }

  componentDidMount() {
    const url = "https://mentor-bee.herokuapp.com/users"
    fetch(url)
    .then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        mentors: data
      })
    })
  }

  render() {
    return (
      <div className="wrapper">
        <h3 id="title">All Mentors</h3>
        <div className="card-wrapper">
          {this.state.mentors.map((mentor) => {
            return <Mentor mentor={mentor} />
          })}
        </div>
      </div>
    )
  }
}

export default AllMentors;
