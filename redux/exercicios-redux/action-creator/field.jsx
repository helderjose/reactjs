import React, { Component } from 'react'
import { connect } from 'react-redux'

// imports desse exemplo
import { bindActionCreators } from 'redux' //liga as ações criadas com os dispatchers
import { changeValue } from './fieldActions' //changeValue vem do fieldActions.js(export function changeValue)
// fim imports desse exemplo

class Field extends Component {

    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                {/* this.props.changeValue é desse exemplo */}
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}


//desse exemplo
/*
mapDispatchToProps vai ser passado no connect.
mapeamento do dispatch para as props.
dispatch é o cara que dispara as ações.
*/
function mapDispatchToProps(dispatch) {
    /*
    dispatch dispara as acoes
    changeValue é um actionCreator
    */
   console.log('field.jsx -> mapDispatchToProps')
    return bindActionCreators({ changeValue }, dispatch)
}


// do exemplo anterior
function mapStateToProps(state) {
    console.log('field.jsx -> mapStateToProps')
    return {
        value: state.field.value
    }
}




//passando mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Field)