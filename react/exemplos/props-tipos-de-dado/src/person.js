'use strict'

import React from 'react'

const Person = ({person }) => (
  <h1>Olá {`${person.type} ${person.idade}`}</h1>
)

Person.defaultProps = {
  person: 'Default lastname'
}

export default Person
