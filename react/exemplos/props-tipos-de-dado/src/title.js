'use strict'

import React from 'react'

// { name, lastname } pega name e lastname de props (passada no app.js)
const Title = ({ name, lastname }) => (
  <h1>Olá {`${name} ${lastname}`}</h1>
)

Title.defaultProps = {
  name: 'Default name',
  lastname: 'Default lastname'
}

export default Title
