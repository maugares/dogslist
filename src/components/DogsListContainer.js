import React, { Component } from 'react'
import * as request from 'superagent'
import DogsList from './DogsList'

export default class DogsListContainer extends Component {
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
    console.log('it gets to render DogsListContainer')
    return <DogsList dogBreeds={this.state.dogBreeds}/>
  }
}