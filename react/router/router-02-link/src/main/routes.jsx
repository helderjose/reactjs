import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'
import App from './app'

/*
se a url nao exitir, redireciona para /
<Redirect from='*' to='/' />
*/
/*
Estratégia de história>
history={hashHistory} 
*/
export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Todo} />
            <Route path='todos' component={Todo} />
            <Route path='about' component={About} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)
