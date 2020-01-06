import React, { Component } from 'react'


/*
// declara a classe e já exporta
export default class ClassComponent extends Component {
*/
/*
Uma propriedade passada para um component react, é somente leitura, ou seja, não podemos
alterar o que tiver dentro de props.

this.props disponível por herança de Component
this.state disponível por herança de Component

*/
export default class ClassComponent extends Component {
	constructor(props) {
		super(props)

		/*
		Inicializa o state do component com um objeto JSON.
		Após essa primeira inicialização use this.setState.
		initialValue é passado pelo index.jsx
		*/
		this.state = { value: props.initialValue }
	}

	sum(delta) {
		/*
		Modifica o state do component criando um novo objeto e nao editando o objeto atual.
		Nesse conceito o dado não é alterado ele é evoluído, por isso não altera o objeto atual. Esse
		conteito vem da programação funcional, tbm é usando no Redux.
		*/
		this.setState({ value: this.state.value + delta })

		/*
		Exemplo para objeto com várias propriedades.
		- Clona o objeto state;
		- Altera a propriedade value.

		Nunca faça
		this.state = ({ ...this.state, value: this.state.value + delta })
		sempre use setState
		*/
		// this.setState({ ...this.state, value: this.state.value + delta })
	}

	render() {
		// this.props.value++; //erro, props é somente leitura, por isso criamos o contrutor
		return (
			<div style={{border: "solid 2px #000"}}>
				<h3>classComponent.jsx</h3>

				{/* como a variável label é somente leitura posso trabalhar direto no props. */}
				<h1>{this.props.label}</h1>

				{/* como a variável value precisa ser leitura e escrita, trabalho com state */}
				<h2>{this.state.value}</h2>

				{/*retorna uma function no button*/}
				<button onClick={() => this.sum(-1)}>Dec</button>
				<button onClick={() => this.sum(1)}>Inc</button>

				{/*
				Não funciona porque a função retorna undefined e assim estou invocando a função e não atribuindo
				a função para o onClick
				*/}
				{/* <button onClick={this.sum(1)}></button> */}
			</div>
		)
	}
}


// não precisa dessa linha porque já exportou na declaração da classe
// export default ClassComponent