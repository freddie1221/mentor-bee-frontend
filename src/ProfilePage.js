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

    const url = `https://mentor-bee.herokuapp.com/users/${idString}`

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

    return (
      <div>
        <h2>{name}'s Profile</h2>
        <img alt="profile-pic" src={pic}></img>
        <p>{name} is available to mentor in the following areas:</p>
        <ul>
          <li>This</li>
          <li>That</li>
        </ul>
        <p className="email">Contact: {email}</p>
      </div>
    )
  }
}

export default ProfilePage;
