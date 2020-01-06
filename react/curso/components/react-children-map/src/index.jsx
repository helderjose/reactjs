import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
	<div style={{border: "solid 2px blue"}}>
		<h3>index.jsx</h3>
		 {/* "lastName" é passado apenas uma vez e o component Family para ela para o component Member */}
		<Family lastName='Silva'>

			{/* cada Member é um componente filho de Family */}
			<Member name='Guilherme' />
			<Member name='Rafael' />
			<Member name='Júlia' />
		</Family>
	</div>
	, document.getElementById('app'))
