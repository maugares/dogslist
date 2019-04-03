import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import DogsListContainer from './components/DogsListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Dogs List</h1>
        </header>
        <main>
          <Route exact path="/" component={DogsListContainer} />
        </main>
      </div>
    );
  }
}

export default App;
