/*
Obs: esse exemplo dá um "warning" no console, o do curso tbm.
Não muda o valor do input, só no próximo exemplo, esse foi só para
configurar o redux.
*/

import React from 'react'
import ReactDOM from 'react-dom'

/*
imports do redux.
combineReducers e createStore são métodos.
- combineReducers -> "liga" cada atributo do objeto store (estado da aplicação) com seu respectivo reducer.
- createStore -> método que cria a store da aplicação que é o estado único.
*/
import { combineReducers, createStore } from 'redux'

/*
imports do react-redux.
Provider com P maiúsculo porque vai ser um componente.
Provider passa o estado para os componentes.
*/
import { Provider } from 'react-redux'

import Field from './field'

// reducers são funções puras (pure function)
const reducers = combineReducers({
    field: () => ({ value: 'Hello redux' }) //retorna um objeto para field
})

ReactDOM.render(
    /*
    Provider vem do react-redux, a aplicação inteira tem que ser envolvida pelo Provider.
    createStore passando reducers.
    Mais para frente será usado middlewares
    */
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
, document.getElementById('app'))