import React from "react";
import { Redirect } from "react-router-dom";

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