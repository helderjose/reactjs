import React, { PropTypes } from 'react'


//todo: usar default value no props.label
const PrimaryButton = (props) => (
  <button
    type={props.type}
    onClick={props.onClick}
  >
    {props.label}
  </button>
)

const SecondaryButton = (props) => (
  <button>{props.label}</button>
)


PrimaryButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string
  // onClick: PropTypes.func
}

SecondaryButton.propTypes = {
  // type: PropTypes.string.isRequired,
  label: PropTypes.string
}

export { PrimaryButton, SecondaryButton }