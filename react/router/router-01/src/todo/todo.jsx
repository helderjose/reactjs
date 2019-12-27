import React, { Component } from 'react'


/*
As ações (métodos) estão todas nesse componente porque nesse exemplo é a forma
mais fácil de trabalhar, já que não temos um gerenciamento de estado por componente.

Olhar o bind do this no construct e olhar a chamada no render()... para os métodos
*/
export default class Todo extends Component {
    // props é somente leitura
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>todo.jsx</h1>
            </div>
        )
    }
}