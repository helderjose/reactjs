import React, { Component } from "react";

// declara a classe e já exporta
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };
  }

  sum(delta) {
    this.setState({ value: this.state.value + delta });
  }

  render() {
    return (
      <div style={{border: "solid 1px #000"}}>
        <h1>{this.props.label}</h1>
        <h2>{this.state.value}</h2>
        <button onClick={() => this.sum(-1)}>Dec</button>
        <button onClick={() => this.sum(1)}>Inc</button>
      </div>
    );
  }
}

// não precisa dessa linha porque já exportou na declaração da classe
// export default ClassComponent
