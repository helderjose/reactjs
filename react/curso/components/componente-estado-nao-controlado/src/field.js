import React, { Component } from "react";

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };

    /*
        Garante que o this vai apontar para o Field, porque em Javascript
        o this muda de escopo dependendo de quem faz a chamada.
        Isso foi feito para usar o this no onChange
        */
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // quando altera o estado, o render() é chamado
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div style={{border: "solid 1px #000"}}>
        <label>{this.state.value}</label>
        <br />

        {/* aqui passamos a função (sem os parênteses) e não invocando a função, por
                isso não precisa passar com arrow function.
                O onChange chama uma função e por padrão ele passa o event que é justamente o que
                esperamos na função hangleChange */}
        <input onChange={this.handleChange} value={this.state.value} />
      </div>
    );
  }
}

export default Field;

/*
Força o estado controlado do componente.
this.state = { value: null }
<input onChange={this.handleChange || ''}/>

componete não controlado
this.state = { value: undefined }
*/
