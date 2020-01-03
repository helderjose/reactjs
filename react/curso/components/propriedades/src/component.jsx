import React from 'react';

// recebe props como parâmetro
export default (props) => (
	<div style={{border: "solid 1px #000"}}>
		<h3>component.jsx</h3>
		{/* exibe a propriedade value passada pelo index.jsx */}
		<h1>{props.value}</h1>
	</div>
)



//quando tem apenas um parâmetro, posso remover os parênteses
// export default props => (
//     <h1>{props.value}</h1>
// )