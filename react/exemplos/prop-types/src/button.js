'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>
    {children}
  </button>
)

/*
parte do exemplo:
handleClick: React.PropTypes.func.isRequired
*/
Button.propTypes = {
  handleClick: React.PropTypes.func
}

export default Button
