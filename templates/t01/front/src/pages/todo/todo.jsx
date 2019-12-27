import React, { Component } from 'react'
import axios from 'axios'

import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/t01-app/api/todos'

export default class Todo extends Component {

  constructor(props) {
    super(props)

    this.state = {description: '', list: [] }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    this.refresh()
  }

  refresh(description = '') {
    // o regex e o sort createdAt é do back-end
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(
        resp => this.setState({ ...this.state, description, list: resp.data }),

        respError => {
          console.log('no respError')
          console.log(respError.response)
        }
      )
  }

  handleAdd() {
    // console.log("this: ", this)
    const description = this.state.description;

    axios.post(URL, { description })
      .then(
        succesResp => {
          // console.log(succesResp)
          this.refresh()
        },
        errorResp => {
          console.log('no errorResp')
          console.log(errorResp.response)
        }
      )
  }

  handleChange(e) {
    // console.log("this: ", this)
    // console.log('e: ', e)
    // console.log("e.target: ", e.target)
    this.setState({...this.state, description: e.target.value})
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(
        succesResp => this.refresh(this.state.description)
      )
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(
        succesResp => {
          this.refresh(this.state.description)
        },
        errorResp => {
          console.log('no errorResp')
          console.log(errorResp.response)
        }
      )
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleClear() {
    this.refresh()
  }

  render() {
    return (
      <div>
        <h1>todo.jsx</h1>
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />

        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    )
  }
}