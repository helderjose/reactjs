import React from 'react'


/*
-- {...props} spread operator, clona o objeto.
-- React.cloneElement funciona só para um elemento (olhar index.jsx).
*/
export default props => (
	<div style={{border: "solid 1px #000"}}>
		<h3>family.jsx</h3>

		{/* passa um clone de props do componente family para os componentes filhos (<Member /> no index.jsx) */}
		{ React.cloneElement(props.children, { ...props }) }


		{/* assim passa diretamente a referência da propriedade do pai para o filho, evite essa maneira */}
		{/* { React.cloneElement(props.children, props) } */}
	</div>
)


/*
-- React.cloneElement funciona só para um elemento.

<Family lastName='Silva'>
    <Member name='Guilherme' />  // só um elemento
</Family>
*/