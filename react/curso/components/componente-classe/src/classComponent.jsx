import React, { Component } from 'react'

/*
Use componente baseado em classe para componente mais complexo.
Em classe usa this.props.
this.props vem por herança de Component
*/
export default class ClassComponent extends Component {
    render() {
        return (
            <h1>{ this.props.value }</h1>
        )
    }
}