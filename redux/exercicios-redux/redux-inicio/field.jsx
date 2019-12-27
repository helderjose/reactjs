import React, { Component } from 'react'

//intregar react com redux
import { connect } from 'react-redux'

/*
Quando usa redux não faz sentido trabalhar com this.state e sim com props.
O state é de escopo global da aplicação e é controlado pelo redux.
*/
class Field extends Component {

    //não preciso mais do constructor porque estava usando só para o state e agora quem controla o state é o redux.
    //não preciso mais do handleChange


    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input value={this.props.value} />
            </div>
        )
    }
}

// mapeia os atributos da store com as propriedades (props) do componente (mapeamento do state para as props)
function mapStateToProps(state) {
    return {
        /*
         state.field.value
         state -> o parâmetro
         field -> vem do index.js "const reducers" field: () => ({ value: 'Opa' })
         value -> atributo do objeto atribuído ao reducers no index.js
        */
        value: state.field.value
    }
}


// o método connect é do react-redux
export default connect(mapStateToProps)(Field) //padrão de projeto Decorator