'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2',
    }
  }

  render() {
    return (
      <div>
        <p>valor selecionado: {this.state.value}</p>
        
        <form>

          {/* se usar 'value' tem que usar 'onChange' */}
          <textarea value='com value' onChange={(e) => {

          }} />

          {/* quebra de linha */}
          <textarea defaultValue={'quebra de\nlinha'} />

          {/* defaultValue */}
          <textarea defaultValue='valor padrão' />


          {/* não faça isso com react, é um antipattern */}
          {/* <textarea>
            meu conteúdo aqui
          </textarea> */}
        </form>


      </div>
    )
  }
}

export default App
