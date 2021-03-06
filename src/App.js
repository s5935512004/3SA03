import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import logo from './logo.svg';

const word = "Sunday";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React by 5935512004</h1>
        </header>
        <div className="AppHandler as Props">
          <h2 className="App-Question">First day of the week?</h2>
            <WordCard value="Sunday" />
            <br></br>
            <a href="https://github.com/s5935512004/3SA03">Visit Github of Nattapon</a>
        </div>
      </div>
    );
  }
  
}

export default App;
