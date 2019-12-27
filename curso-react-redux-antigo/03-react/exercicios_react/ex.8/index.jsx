import React from 'react'
import ReactDOM from 'react-dom'

/*
"Primeiro" é o export default no component.jsx
*/
import Primeiro, { Segundo } from './component'

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'))