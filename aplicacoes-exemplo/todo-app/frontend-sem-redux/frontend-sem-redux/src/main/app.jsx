/*
modules foi configurado no webpack.config.js
modules: __dirname + '/node_modules'
*/
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)



//versao 1
/*
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

export default props => (
    <div className='container'>
        <h1>Teste</h1>
    </div>
)
*/