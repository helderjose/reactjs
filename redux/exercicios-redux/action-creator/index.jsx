/*
OBS: Esse exemplo ainda não muda o valor do input porque
nesse arquivo estou retornando sempre o mesmo state.
Nesse exemplo foi configurado o action creator.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'

const reducers = combineReducers({
    //versão original
    // field: () => ({ value: 'Hello redux' })

    // versão para estudo
    field: () => {
        console.log("index.jsx -> reducers")
        return { value: 'Hello redux' }
    }
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
, document.getElementById('app'))