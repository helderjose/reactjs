import React from 'react'


export default props => (
	<div style={{border: "solid 2px orange"}}>
		<h3>family.jsx</h3>


		{
			/*
			Aqui props é:
			props = {
				children: array com os três Members,
				lastName: "Silva"
			}
			Tudo passado em index.jsx
			*/
			console.log("family props: ", props)


			/*
				percorre cada elemento filho (props.children) e passa um clone de props para ele
				(próximo exemplo coloca o map em um util.js).

				props.children: cada Member passado no index.jsx.
				child o elemento atual do array props.children (aqui é o array.map),
				poderia chamar de "member", ficando dessa forma:
				member => React.cloneElement(member, { ...props })
			*/
		}
		{React.Children.map(props.children,
			child => React.cloneElement(child, { ...props }))}
	</div>
)

