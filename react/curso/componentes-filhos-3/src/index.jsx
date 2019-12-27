import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='Guilherme' />

        {/* se descomentas esses elementos dá erro porque React.cloneElement só funciona para um elemento,
        o próximo exemplo mostra como resolver esse problema. */}
        {/* <Member name='Rafael' />
        <Member name='Júlia' /> */}
    </Family>

, document.getElementById('app'))
