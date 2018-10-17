import React, { Component } from "react";
import Mentor from "./Mentor";

class AllMentors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mentors: [
        {"id":1,"name":"Newt Scamander","email":"brookswolf@wiza.io", "pic":"https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"},
        {"id":2,"name":"Vernon Dursley","email":"monnie@gorczany.biz", "pic":"https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"}
        ]
    }
  }

  componentDidMount() {
    // fetch("https://mentor-bee.herokuapp.com/users")
    // .then(response => {
    //   return response.json()
    // }).then(data => {
    //   this.setState({
    //     mentors: data
    //   })
    // })
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
