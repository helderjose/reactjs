'use strict'

import React, { Component } from 'react'
import Button from './button.js'
class App extends Component {
  render() {
    return (
      <div className='container'>

        {/*
        tudo que está dentro de button é children do button
        podemos passar um component dentro do outro com children
        */}
        <Button>
          <span>Meu span</span>
          Meu Texto
        </Button>

      </div>
    )
  }
}

export default App
