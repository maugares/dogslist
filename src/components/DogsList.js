import React, { Component } from 'react'
import * as request from 'superagent'
import './DogsList.css'

export default class DogsList extends Component {
  state = { dogBreeds: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const keys = response.body.message
        const breeds = Object.keys(keys)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    return (
      <div className='dogs-list'>
        {/* <h1>Dogs list</h1> */}
        <ul>
          {this.state.dogBreeds ? this.state.dogBreeds.map(breed => <li key={breed}> {breed} </li>) : 'loading'}
        </ul>
      </div>
    )
  }
}
