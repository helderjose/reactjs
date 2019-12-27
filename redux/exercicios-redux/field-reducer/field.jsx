import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

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
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

/*
- gera um evento a partir do onChange do input;
- onChange está ligado com fieldActions.js -> changeValue; e ele só está
disponível na props por causa do mapDispatchToProps

- quando a action é disparada, automaticamente chama o fieldReducer
*/

function mapDispatchToProps(dispatch) {
   console.log('field.jsx -> mapDispatchToProps')
    return bindActionCreators({ changeValue }, dispatch)
}


function mapStateToProps(state) {
    console.log('field.jsx -> mapStateToProps')
    return {
        value: state.field.value
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Field)