'use strict'

import React, { Component } from 'react'
import Square from './square'
import Title from './title'

class App extends Component {
  render() {
    return (
      <div className='container'>

        <Title />   {/* vai pegar o default props */}
        <Title name="Homer" lastname="Simpson" />
        <Title name="Homer" />
        <Title lastname="Simpson" />

        {['blue', 'red', 'blue'].map((square, index) => (
          <Square key={index} color={square} />
        ))}

      </div>
    )
  }
}

export default App
