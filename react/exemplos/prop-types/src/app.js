'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {

  // constructor() {
  //   // console.log('app.js constructor')
  //   super()
  //   this.state = {
  //     time: 0,
  //     showTimer: true
  //   }
  // }


  render () {
    return (
      <div>
        <Button>
          Click
        </Button>

        {/*
        descomente esse botao para ver a mensagem de erro
        avisando que handleClick deve ser uma funcion
        */}
        {/* <Button handleClick={'minhaString'}>
          Click 2
        </Button> */}
      </div>
    )
  }
}

export default App
