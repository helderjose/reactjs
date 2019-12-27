'use strict'

import React from 'react'

// componente baseado em arrow function
// { name, lastname } pega name e lastname de props (passada no app.js)
const Title = ({ name, lastname }) => (
  <h1>Olá {`${name} ${lastname}`}</h1>
)

Title.defaultProps = {
  name: 'Default name',
  lastname: 'Default lastname'
}

export default Title
