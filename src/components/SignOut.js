import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import CurrentUser from "../CurrentUser"

class SignOut extends React.Component {

  componentDidMount(){
    window.localStorage.clear()
    this.props.signedOut()
  }


render() {  
  return <Redirect to='/Sign-in'/>
}

}

export default SignOut