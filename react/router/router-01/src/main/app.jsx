/*
modules foi configurado no webpack.config.js
modules: __dirname + '/node_modules'
*/

import React from 'react'

import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)

