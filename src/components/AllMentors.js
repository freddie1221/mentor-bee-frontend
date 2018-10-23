import React, { Component } from "react";
import Mentor from "./Mentor";

class AllMentors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mentors: [],
      currentUser: JSON.parse(window.localStorage.getItem("currentUser"))
    }
  }

  componentDidMount() {

    const url = "https://mentor-bee-api.herokuapp.com/mentors"
    fetch(url, {
      headers: {
        "Authorization": this.state.currentUser._token,
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        mentors: data
      })
    }).catch(error => {
      console.log("Error: " + error)
    })
  }

  render() {
    return (
      <div className="wrapper">
        <h3 id="title">Available Mentors</h3>
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
