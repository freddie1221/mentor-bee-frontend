import React from "react";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mentor: []
    }
  }

  componentDidMount() {
    const address = this.props.location.pathname
    const idString = address.split("mentors/")[1]

    const url = `https://mentor-bee-api.herokuapp.com/users/${idString}`

    fetch(url)
    .then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        mentor: data
      })
    })
  }

  render() {

    const name = this.state.mentor.name
    const pic = this.state.mentor.pic
    const email = this.state.mentor.email
    const mailto = `mailto:${email}` 

    return (
      <div className="profile-wrapper">
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
          <form>
            <button id="book-btn">Book</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ProfilePage;
