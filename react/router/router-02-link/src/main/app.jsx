/*
modules foi configurado no webpack.config.js
modules: __dirname + '/node_modules'
*/

import React from 'react'

import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Menu />
        {props.children}
    </div>
)

