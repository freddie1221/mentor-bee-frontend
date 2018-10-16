import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation:''
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
    // TODO connect to API
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          /><br/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          /><br/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          /><br/>
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Re-enter password"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
            required
          /><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default Register;

/* <select value={this.state.value} onChange={this.handleChange}>
<option value="grapefruit">Grapefruit</option>
<option value="lime">Lime</option>
<option value="coconut">Coconut</option>
<option value="mango">Mango</option>
</select> */



{/* <Form model={model} onChange={model => this.setState({model})} onSubmit={model => this.setState({selected: model})}>
<Field name="title" label="Title"/>
<Field name="category" label="Category"/>
<Field name="books.selected" type="select" label="Book">
  <option value="">Select....</option>
  <option value="one">One</option>
  <option value="two">Two</option>
  <option value="three">Three</option>
</Field>
<button type="submit">Submit</button>
</Form> */}
