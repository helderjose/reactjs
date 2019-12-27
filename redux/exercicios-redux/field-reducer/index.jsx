/*
Exemplo completo, muda a label quando digita no input.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'

//imports desse exemplo
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    /*
    Repare que fieldReducer é uma function no fieldReducer.js.
    Quem controla o campo "field" é o fieldReducer.
    Mesmo se esse JSON tivesse outra key, apenas o field: fieldReducer seria passado para o reducer.
    */
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
, document.getElementById('app'))