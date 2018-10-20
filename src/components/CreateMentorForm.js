import React, { Component } from "react";

class CreateMentorForm extends Component {

  render() {
    return (
      <div className="clearfix">
        <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              name="bio"
              placeholder="Tell us about yourself..."
              value={this.state.bio}
              onChange={this.handleChange}
              required
            /><br/>
            <input
              type="text"
              name="skill"
              placeholder="What do you want to mentor in?"
              value={this.state.skill}
              onChange={this.handleChange}
              required
            /><br/>
              <button type="submit" className="signupbtn">Submit</button>
        </form>
      </div>
    );
  }
}



export default CreateMentorForm;