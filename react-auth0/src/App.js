import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Main from './components/Main';
import Secret from './components/Secret';
import Error from './components/Error';
import Callback from './components/Callback';

class App extends Component {
  render() {
    let mainComponent = "";
    switch(this.props.location){
      case "":
        mainComponent = <Main {...this.props} />;
        break;
      case "callback":
        mainComponent = <Callback />;
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <Error />;
        break;
      default:
        mainComponent = <Error />;
    }
    return(
      <div className="App">
      <header className="App-header">
      <h1>Hello {this.props.name}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {mainComponent}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Native
        </a>
      </header>
    </div>
    )
  }
}

export default App;
