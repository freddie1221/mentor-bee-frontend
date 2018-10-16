import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SignIn from "./SignIn";
import Register from "./Register";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Mentor Bee</h1>
          <ul className="header">
            <li><NavLink exact to="/">Sign in</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            
          </ul>
          <div className="content">
            <Route exact path="/" component={SignIn}/>
            <Route path="/register" component={Register}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;


// import React, { Component } from 'react';
// import bee from './bee.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={bee} className="App-logo" alt="logo" />
//           <p>
//             Welcome to Mentor Bee
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Enter
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;