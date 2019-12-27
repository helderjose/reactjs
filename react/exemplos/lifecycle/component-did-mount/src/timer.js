'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    console.log('timer.js constructor')
    super()
    this.state = {
      time: 0
    }

    this.timer
  }

  componentDidMount () {
    console.log('timer.js componentDidMount')
  }


  componentWillMount () {
    console.log('timer.js componentWillMount')
  }

  render () {
    console.log('timer.js render')
    return <div>Timer: {this.state.time}</div>
  }
}

Timer.defaultProps = {
  time: 0
}

export default Timer
