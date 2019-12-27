'use strict'

import React, { Component } from 'react'
import Title from './title'
import Person from './person'

class App extends Component {
  render() {
    return (
      <div className='container'>

        <Title name='Number: ' lastname={123456789} />
        <Title name='Boolean: ' lastname={false} />
        <Title name='Array: ' lastname={['5', 6, 7]} />

        <Person person={{type:"Exemplo tipo Object: ", idade: 33}} />

      </div>
    )
  }
}

export default App
