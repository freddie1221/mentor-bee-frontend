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

    console.log(url)

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

    return (
      <div>
        <h2>{name}'s Profile</h2>
        <img alt="profile-pic" src={pic}></img>
      </div>
    )
  }
}

export default ProfilePage;
