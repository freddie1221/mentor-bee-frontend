import React, { Component } from 'react';
import bee from './bee.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bee} className="App-logo" alt="logo" />
          <p>
            Welcome to Mentor Bee
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enter
          </a>
        </header>
      </div>
    );
  }
}

export default App;
