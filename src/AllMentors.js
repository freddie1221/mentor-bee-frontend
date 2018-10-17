import React, { Component } from "react";
import Mentor from "./Mentor";

class AllMentors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mentors: [
        {
          "id":1,
          "name":"Newt Scamander",
          "email":"brookswolf@wiza.io", 
          "pic":"https://randomuser.me/api/portraits/men/22.jpg",
          "skills":"Dancing, React, Baking"
        },
        {
          "id":2,
          "name":"Vernon Dursley",
          "email":"monnie@gorczany.biz", 
          "pic":"https://randomuser.me/api/portraits/men/72.jpg",
          "skills":"Accounting, Maths, Guitar"
        },
        {
          "id":1,
          "name":"Newt Scamander",
          "email":"brookswolf@wiza.io", 
          "pic":"https://randomuser.me/api/portraits/men/22.jpg",
          "skills":"Dancing, React, Baking"
        },
        {
          "id":1,
          "name":"Newt Scamander",
          "email":"brookswolf@wiza.io", 
          "pic":"https://randomuser.me/api/portraits/men/22.jpg",
          "skills":"Dancing, React, Baking"
        }
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
