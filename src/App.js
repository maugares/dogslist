import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogsList from './components/DogsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Dogs List</h1>
        </header>
        <main>
          <DogsList />
        </main>
      </div>
    );
  }
}

export default App;
