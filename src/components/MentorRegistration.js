import React, { Component } from "react";

class MentorRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      skill: '',

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const target = event.target
    this.setState({
        [target.name]: target.value
    })
  }
  handleSubmit(event) {
    console.log("Handling submit")
  }

  render() {
    return (
      <div className="clearfix">
        <form onSubmit={this.handleSubmit}>
          <label for="name">Bio</label>
          <input
              type="text"
              name="bio"
              value={this.state.name}
              onChange={this.handleChange}
              required
              autoFocus
            /><br/>
            <label for="skill">Skill</label>
            <input
              type="text"
              name="skill"
              value={this.state.email}
              onChange={this.handleChange}
              required
            /><br/>
            <button type="submit" className="signupbtn">Submit</button>
        </form>
      </div>
    );
  }
}

export default MentorRegistration