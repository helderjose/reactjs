import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

// import Todo from '../todo/todo'
// import About from '../about/about'
import App from './app'
import Login from '../pages/login/login'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Register from '../pages/register/register'
import Todo from '../pages/todo/todo'

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
            <IndexRoute component={Home} />
            <Route path='login' component={Login} />
            <Route path='about' component={About} />
            <Route path='register' component={Register} />
            <Route path='todo' component={Todo} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)
