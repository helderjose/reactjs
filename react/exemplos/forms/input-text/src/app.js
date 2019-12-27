'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial'
    }
  }

  render() {
    return (
      <div>
        <form>
          {/*
          Esse não é o input do html, é do React.
          O input é um controlled component
          */}
          <input type='text'
            value={this.state.value}
            onChange={(e) => {
              // console.log('e: ', e)
              console.log('e.targe: ', e.target)
              // console.log('e.nativeEvent: ', e.nativeEvent)
              this.setState({
                value: e.target.value
              })
            }} />

            <br/><br/><br/>


            {/*
            Uncontrolled component com value.
            Statefull component
            Editável na view, mas o value não muda.
            */}
            <input type='text'
              defaultValue='valor padrão com default value'
            />
        </form>
      </div>
    )
  }
}

export default App
