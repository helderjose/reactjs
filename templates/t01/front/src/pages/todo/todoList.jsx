import React from 'react'
// import IconButton from '../template/iconButton'

export default props => {

  const renderRows = () => {
    const list = props.list || []

    //TODO: trocar o nome de 'list' pata todoList
    return list.map(todo => {
      return (
      <tr key={todo._id}>
        <td className={todo.done ? 'masked-as-done' : ''}>{todo.description}</td>
        <td>{todo.done + ''}</td>
        <td>{todo.createdAt}</td>
        <td>
          <button
            onClick={() => props.handleMarkAsDone(todo)}
            disabled={todo.done}
          >
            Concluir
          </button>
          <button
            onClick={() => props.handleMarkAsPending(todo)}
            disabled={!todo.done}
          >
            Pendente
          </button>
          <button onClick={() => props.handleRemove(todo)}>Excluir</button>
        </td>
      </tr>
    )})
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Concluído</th>
          <th>Data</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

// export default props => {

//     const renderRows = () => {
//         const list = props.list || []
//         return list.map(todo => (
//             /* key é uma chave única, _id é gerado pelo mongoDB */
//             <tr key={todo._id}>
//                 <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
//                 <td>
//                     <IconButton style='success' icon='check' hide={todo.done}
//                         onClick={() => props.handleMarkAsDone(todo)}></IconButton>
//                     <IconButton style='warning' icon='undo' hide={!todo.done} 
//                         onClick={() => props.handleMarkAsPending(todo)}></IconButton>
//                     <IconButton style='danger' icon='trash-o' hide={!todo.done} 
//                         onClick={() => props.handleRemove(todo)}></IconButton>
//                 </td>
//             </tr>
//         ))
//     }

//     return (
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>Descrição</th>
//                     <th className='tableActions'>Ações</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {renderRows()}
//             </tbody>
//         </table>
//     )
// }