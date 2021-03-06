'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2',
      multiple: ['1', '2']
    }
  }

  render() {
    return (
      <div>
        <p>valor selecionado: {this.state.value}</p>
        
        <form>

          <select defaultValue={this.state.value} onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }}>
            <option value='1'>Opção 1</option>
            <option value='2'>Opção 2</option>
            <option value='3'>Opção 3</option>
          </select>

          <br/><br/><br/>
          {/* TODO: tenho que melhorar esse exemplo */}
          <p>Exemplo multiple:</p>
          <p>valor selecionado: {this.state.multiple}</p>
          <select multiple defaultValue={this.state.multiple} onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }}>
            <option value='1'>Opção 1</option>
            <option value='2'>Opção 2</option>
            <option value='3'>Opção 3</option>
          </select>

          {/* use defaultValue no lugar de selected no option, ex: */}
          {/* <select defaultValue='2'>
            <option value='1'>Opção 1</option>
            <option value='2'>Opção 2</option>
          </select> */}
        </form>


      </div>
    )
  }
}

export default App
