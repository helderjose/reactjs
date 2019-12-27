'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {

  constructor() {
    // console.log('app.js constructor')
    super()
    this.state = {
      showTimer: true
    }
  }

  // componentDidMount () {
  //   console.log('app.js componentDidMount')
  // }

  // componentWillMount () {
  //   console.log('app.js componentWillMount')
  // }

  render () {
    // console.log("app.js render")
    return (
      <div>
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>show / hide timer</button>
      </div>
    )
  }
}

export default App
