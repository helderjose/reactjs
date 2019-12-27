'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {

  constructor() {
    // console.log('app.js constructor')
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }


  render () {
    return (
      <div>
        <Timer time={this.state.time} />
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change props - clique para testar o exemplo</button>
      </div>
    )
  }
}

export default App
