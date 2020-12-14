import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './Auth';

const auth = new Auth();


let state = {};

window.setState = (changes) => {
  state = Object.assign({}, state, changes);

  ReactDOM.render(
    <React.StrictMode>
      <App {...state} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

/* eslint no-restricted-globals: 0 */

let username = auth.getProfile().given_name || "Teja";
let initialState = {
  name: username,
  location: location.pathname.replace(/^\/?|\/$/g, ""),
  auth
}

window.setState(initialState);



reportWebVitals();
