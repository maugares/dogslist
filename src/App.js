import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import DogBreedImages from './components/DogBreedImages'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Route exact path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImages}/>
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer}/>
        </main>
      </div>
    )
  }
}

export default App;
