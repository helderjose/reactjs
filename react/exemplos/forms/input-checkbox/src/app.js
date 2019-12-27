'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      value: 'Valor inicial'
    }
  }

  render() {
    return (
      <div>
        <form>

          {/* controlled component */}
          <label>
            <input type='checkbox'
              value='my-checkbox'
              checked={this.state.checked}
              onChange={(e) => {
                this.setState({ checked: e.target.checked })
                // this.setState({ checked: !this.state.checked })
              }} />
            Checkbox controlled
          </label>
          <br/><br/>

          {/*
          Uncontrolled checkbox (sem a propriedade checked).
          Quando quiser marcar como true, passe apenas o 'defaultValue' sem nada
          */}
          <label>
            <input type='checkbox'
              defaultValue
              // defaultValue={false}
              />
            Checkbox uncontrolled 2
          </label>

          <br/><br/>
          <label>
            <input type='checkbox'/>
            Checkbox uncontrolled 1
          </label>


        </form>
      </div>
    )
  }
}

export default App
