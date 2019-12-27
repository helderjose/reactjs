import React, { PropTypes } from 'react'

const Input = (props) => (
    <input
        type={props.type}
        id={props.id}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
    >
    </input>
)

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
}


export { Input }