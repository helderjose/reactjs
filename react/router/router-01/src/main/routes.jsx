import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

/*
se a url nao exitir, redireciona para /todos
<Redirect from='*' to='/todos' />
*/
/*
Estratégia de história>
history={hashHistory} 
*/
export default props => (
    <Router history={hashHistory}>
        {/* http://localhost:8080/#/todos */}
        <Route path='/todos' component={Todo} />

        {/* http://localhost:8080/#/about */}
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)