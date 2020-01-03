import React from 'react'


/*
props.children: quando definir o componente <Family/> (como no index.jsx por exemplo), tudo
que for passado dentro do <Family/> vai ser passado para o props.children.
*/
export default props => (
	<div style={{border: "solid 3px orange"}}>
		<h3>family.jsx</h3>

		{/* comente e descomente a linha abaixo, o Member não vai ser passado */}
		{ props.children }
	</div>
)