import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
  <div style={{ border: "solid 2px orange" }}>
    <h3>index.jsx</h3>
    <ClassComponent value='Componente Classe' />
  </div>
  , document.getElementById('app'))
