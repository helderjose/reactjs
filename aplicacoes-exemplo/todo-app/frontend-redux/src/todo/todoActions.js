import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

//é um actionCreator, retorna uma action
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

/*
middleware promise => sempre que retorna uma promise no action ele
espear a promise ser resolvida e só depois disparar os reducers.
*/
//mapeado para o form
export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

/*
Obs: { description } criar um objeto assim { description: description }

middleware multi => permite retornar um array com várias actions, só
que essas actions são disparadas em paralelo
*/
//mapeado para o form
export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

//mapeado para a lista
export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

//middleware multi interpreta as ações que estão no array
export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}