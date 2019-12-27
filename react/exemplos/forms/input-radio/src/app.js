'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <div>
        <form>

          <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
          <input type='radio' name='rd' value='2' /> Radio 2

        </form>
      </div>
    )
  }
}

export default App
