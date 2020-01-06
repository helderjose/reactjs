import React, { Component } from 'react'

/*
Use componente baseado em classe para componente mais complexo.
Em classe usa this.props.
this.props vem por herança de Component
*/
export default class ClassComponent extends Component {
	render() {
		return (
			<div style={{border: "solid 2px #000"}}>
				<h3>classComponent.jsx</h3>
				<h1>{this.props.value}</h1>
			</div>
		)
	}
}