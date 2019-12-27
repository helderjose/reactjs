'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div>


        {/* não faz submit do form, imprime no console */}
        <form onSubmit={(e) => {
          e.preventDefault() //previne a ação padrão que seria o submit para evitar o submit
          console.log('e: ', e)
        }}>

          <textarea name='textarea' defaultValue={'quebra de\nlinha'} />
          <button type='submit'>Enviar</button>
        </form>

        <br/><br/><br/><br/>
        
        {/* assim envia por GET */}
        <form onSubmit={(e) => {
          console.log('e: ', e)
        }}>

          <textarea name='textarea' defaultValue={'quebra de\nlinha'} />
          <button type='submit'>Enviar</button>
        </form>


      </div>
    )
  }
}

export default App
