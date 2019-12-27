import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

/*
A aplicação front-end roda na porta 8080.
O back-end roda na porta 3003.
*/
const URL = 'http://localhost:3003/api/todos'


/*
Como esse exemplo não usa Redux, as ações (métodos) estão todas
aqui, porque é mais fácil controlar o estado do "pai" (todo.jsx) para
os filhos (todosForm.jsx) e (todoLis.jsx).
No exemplo com redux, cada componente vai ter seu estado, porque com
Redux é mais fácil fazer esse gerenciamento.

Olhar o bind do this no construct e olhar a chamada no render()... para os métodos
*/
export default class Todo extends Component {
    // props é somente leitura
    constructor(props) {
        super(props)
        /*
        description é o value do input text no todoForm.jsx
        this.state lê o state
        */
        this.state = { description: '', list: [] }

        //faz bind do this porque aqui o this é a própria classe
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    /*
    Ordena a lista de todo pela data de criação, do mais novo para o mais velho.
    */
    refresh(description = '') {
        console.log("--- todos.jsx/refresh ---")
        // o regex e o sort createdAt é do back-end
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    /*
    Olhar o bind do this no construct e olhar a chamada no render()...
    */
    handleSearch() {
        console.log("--- todos.jsx/handleSearch ----")
        this.refresh(this.state.description)
    }

    handleChange(e) {
        console.log("--- no todo.jsx/handleChange ---", e.target.value)
        this.setState({...this.state, description: e.target.value })
    }

    //salva um todo
    handleAdd() {
        console.log("--- todo.jsx/handleAdd ---");
        const description = this.state.description;
        
        //axios é baseado em promises
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    //deleta um todo
    handleRemove(todo) {
        console.log("--- todo.jsx/handleRemove ---");
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }
    
    handleMarkAsDone(todo) {
        console.log("--- todo.jsx/handleMarkAsDone ---")
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        console.log("--- todo.jsx/handleMarkAsPending ---")
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        console.log("--- no todo.jsx/handleClear ---")
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm 
                    description={this.state.description}
                    //handleChange é o mesmo nome do todoForm.jsx
                    handleChange={this.handleChange}
                    // passa a funcao para o todoForm.jsx
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                
                {/* todoList.jsx */}
                <TodoList 
                    list={this.state.list}
                    // passa a funcao para todoList.jsx. Olhar o bind do this no construtor
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}