import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

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
    <div role='form' className='todoForm'>
      {/* <Grid cols='12 9 10'> olhar template/grid.jsx */}
      <Grid cols='12 9 10'>

        {/*
        OBS: se esse imput fosse um componente, todos os atributos que estão
        no 'input' deveriam estar também no 'Input' (componente).
        */}
        <input id='description' className='form-control'
          placeholder='Adicione uma tarefa'
          onChange={props.handleChange} // está sendo manipulado no todo.jsx
          onKeyUp={keyHandler}
          value={props.description}></input>
      </Grid>
      <Grid cols='12 3 2'>
        {/* handleAdd está vindo do todo.jsx */}
        <IconButton style='primary' icon='plus'
          onClick={props.handleAdd}></IconButton>
        <IconButton style='info' icon='search'
          onClick={props.handleSearch}></IconButton>
        <IconButton style='default' icon='close'
          onClick={props.handleClear}></IconButton>
      </Grid>
    </div>
  )
}