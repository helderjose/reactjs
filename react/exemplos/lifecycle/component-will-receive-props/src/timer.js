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

  componentWillReceiveProps (nextProps) {
    console.log('timer.js componentWillReceiveProps', this.props, nextProps)
  }

  /*
  reseta o timer para o seTinterval não tentar atualizar
  um component que não está mais no DOM.
  */
  componentWillUnmount () {
    // console.log('timer.js componentWillUnmount')
    clearInterval(this.timer)
  }

  // depois que o component estiver no DOM, inicia o timer
  componentDidMount () {
    // console.log('timer.js componentDidMount')
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillMount () {
    // console.log('timer.js componentWillMount')
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
