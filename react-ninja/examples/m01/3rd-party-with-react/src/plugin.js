'use struct'

import React, { Component } from 'react'

class Plugin extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('clicou no botão!', this.myInput)
    this.myInput.focus()
  }

  render () {
    return (
      <div>
        {/*
        ref é do react, é uma referência do elemento, quando o elemento é renderisado, o ref é executado.
        ref recebe uma função
        */}
        <input type='text' ref={(node) => (this.myInput = node)} />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    )
  }
}

export default Plugin
