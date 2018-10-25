import React from "react";
const SuccessIndicator = require("react-success-indicator")

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mentor: [],
      currentUser: JSON.parse(window.localStorage.getItem("currentUser")),
      mentorshipConfirm: false,
      confirmedMentor: "",
      confirmedMentee: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    const address = this.props.location.pathname
    const idString = address.split("mentors/")[1]

    const url = `https://mentor-bee-api.herokuapp.com/mentors/${idString}`

    fetch(url, {
      headers: {
        "Authorization": this.state.currentUser._token,
        "Content-Type": "application/json"
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        mentor: data.mentor
      })
    }).catch(error => {
      console.log(error)
    })
  }

  handleSubmit(event) {

    const data = {
      "mentorship": {
        "mentor_id": this.state.mentor.mentor_id,
        "mentee_id": this.state.currentUser._menteeID
      }
    }

    const mentorshipURL = "https://mentor-bee-api.herokuapp.com/mentorships"

    fetch(mentorshipURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Authorization": this.state.currentUser._token,
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        this.setState({
          mentorshipConfirm: true
        })
        return res.json()
      }
    }).then(response => {
      this.setState({
        confirmedMentor: response.mentorship.mentor_name,
        confirmedMentee: response.mentorship.mentee_name
      })
    }).catch(error => {
      console.log(error)
    })

    event.preventDefault()
  }

  requestButton() {

    if (!this.state.mentorshipConfirm) {

      if (this.state.currentUser._menteeID === null) {
        return (
          <form onSubmit={this.handleSubmit}>
                <button id="disabled-btn" disabled>Request Mentorship</button>
          </form>
          )
      } else if (this.state.currentUser._id === this.state.mentor.user_id) {
        return (
          <form onSubmit={this.handleSubmit}>
                <button id="disabled-btn" disabled>Request Mentorship</button>
          </form>
          )
      } else {
        return (
          <form onSubmit={this.handleSubmit}>
                <button id="book-btn">Request Mentorship</button>
          </form>
          )
      } 
    } else {
      return (
        <div id="confirmation">
          <p id="tick"><SuccessIndicator size='60px' color='#F3B700' /></p>
        </div>
      )
    }
  }

  render() {

    const name = this.state.mentor.name
    const pic = this.state.mentor.pic
    const email = this.state.mentor.email
    const bio = this.state.mentor.bio
    const skill = this.state.mentor.skill
    const mailto = `mailto:${email}` 

    return (
      <div className="profilePage-wrapper">
        <p className="profile-title">{name}'s Profile</p>
        <img className="profile-pic" alt="profile-pic" src={pic}></img>
        <div className="profile-body">
          <p className="subtitle"> About</p>

          <p> {bio} </p>

          <p>{name} is available to mentor in <strong>{skill}</strong>.</p>
          <form method="post" action={mailto}>
            <button>Contact</button>
          </form>
          {this.requestButton()}
        </div>
      </div>
    )
  }
}

export default ProfilePage;
