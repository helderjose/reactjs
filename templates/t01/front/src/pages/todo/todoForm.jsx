import React from 'react'
// import { Input } from '../../components/inputs/inputs'
// import { PrimaryButton } from '../../components/buttons/buttons'

export default props => {

  /*
    Pesquisa um todo ao apertar enter.
    Pesquisa ao apertar shift + enter.
    Limpa o form ao apertar esc.
    */
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role='form'>
      <label> Name
        <input type='text'
          value={props.description}
          onChange={props.handleChange}
          onKeyUp={keyHandler}
        />
      </label>

      <button type="button"
        onClick={props.handleAdd}>
        Add
      </button>

      <button type="button"
        onClick={props.handleSearch}>
        Search
      </button>

      <button type="button"
        onClick={props.handleClear}>
        Clear
      </button>
    </div>
  )
}