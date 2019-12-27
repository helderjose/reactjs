'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {

  constructor() {
    console.log('app.js constructor')
    super()
  }

  componentWillMount () {
    console.log('app.js componentWillMount')
  }

  render () {
    console.log("app.js render")
    return (
      <div>
        <Timer />
      </div>
    )
  }
}

export default App
