import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/form.css';
import './styles/all-mentors.css';
import './styles/mentor-box.css';
import './styles/profilePage.css';
import './styles/profile-creation.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
