import React, { Component } from 'react'

import './New.css'
import api from '../services/api'

export default class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: ''
  }

  handleSubmit = async e => {
    e.preventDefault()

    const data = new FormData()

    data.append('image', this.state.image)
    data.append('author', this.state.author)
    data.append('place', this.state.place)
    data.append('description', this.state.description)
    data.append('hashtags', this.state.hashtags)

    await api.post('posts', data)

    this.props.history.push('/')
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleImageChange = e => this.setState({ image: e.target.files[0] })

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />
        <input
          type="text"
          name="author"
          value={this.state.author}
          placeholder="Autor do post"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="place"
          value={this.state.place}
          placeholder="Local do post"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="description"
          value={this.state.description}
          placeholder="Descrição do post"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="hashtags"
          value={this.state.hashtags}
          placeholder="Hashtags do post"
          onChange={this.handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}
