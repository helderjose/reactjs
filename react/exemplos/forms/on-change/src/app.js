'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div>


        <p>abra o console e digite nos campos</p>
        <form
          onChange={(e) => {
            console.log('name ', e.target.name)
            console.log('value ', e.target.value)
          }}>

          <input type='text' name='name' /> <br/>
          <input type='email' name='email' />
          <button type='submit'>Enviar</button>
        </form>

        
      </div>
    )
  }
}

export default App
