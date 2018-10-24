import React from "react";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mentor: [],
      currentUser: JSON.parse(window.localStorage.getItem("currentUser"))
    }

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    const address = this.props.location.pathname
    const idString = address.split("mentors/")[1]

    const url = `https://mentor-bee-api.herokuapp.com/users/${idString}`

    fetch(url, {
      headers: {
        "Authorization": this.state.currentUser._token,
        "Content-Type": "application/json"
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        mentor: data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  handleSubmit(event) {
    const data = {
      "mentorship": {
        "mentor_id": this.state.mentor.id
      }
    }

    const mentorshipURL = "https://mentor-bee-api.herokuapp.com/mentorships"

    fetch(mentorshipURL, {
      headers: {
        "Authorization": this.state.currentUser._token,
        "Content-Type": "application/json"
      }
    }).then(response => {
      return response.json()
    }).catch(error => {
      console.log(error)
    })
  }

  render() {

    const name = this.state.mentor.name
    const pic = this.state.mentor.pic
    const email = this.state.mentor.email
    const mailto = `mailto:${email}` 

    return (
      <div className="profilePage-wrapper">
        <p className="profile-title">{name}'s Profile</p>
        <img className="profile-pic" alt="profile-pic" src={pic}></img>
        <div className="profile-body">
          <p className="subtitle"> About</p>
          <p>{name} is available to mentor in the following areas:</p>
          <ul>
            <li>This</li>
            <li>That</li>
          </ul>
          <form method="post" action={mailto}>
            <button>Contact</button>
          </form>
          <form onSubmit={this.handleSubmit}>
            <button id="book-btn">Request Mentorship</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ProfilePage;
