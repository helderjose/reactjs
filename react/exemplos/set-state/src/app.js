'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render() {
    return (

      /*
      Usando o callback do setState para atualizar o 'showContent'
      */
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={() => {
            this.setState({
              checked: !this.state.checked
            }, () => {
              this.setState({
                showContent: this.state.checked
              })
            })
            }} /> Mostrar conteúdo
          </label>

          {this.state.showContent && <div>Conteúdo exibido</div>}
      </div>

      /*
      Esse exemplo mostra como o setState é assíncrono,
      A div do conteúdo é exibido quando desmarca o checkbox.
      */
      // <div>
      //   <label>
      //     <input
      //       type='checkbox'
      //       checked={this.state.checked}
      //       onChange={() => {
      //       this.setState({ checked: !this.state.checked })
      //       this.setState({ showContent: this.state.checked })
      //       }} /> Mostrar conteúdo
      //     </label>

      //     {this.state.showContent && <div>Conteúdo exibido</div>}
      // </div>
    )
  }
}

export default App
