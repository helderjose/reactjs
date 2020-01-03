import React from 'react';
import ReactDOM from 'react-dom';
import { Primeiro, Segundo } from './component';



ReactDOM.render(
	<div style={{border: "solid 2px #000"}}>
		<h3>index.jsx</h3>
		<Primeiro />
		<Segundo />
	</div>

	// devo colocar em um div ou em outro componente, senão dá erro.
	/* <Primeiro/>
	<Segundo/> */


	, document.getElementById('app'))