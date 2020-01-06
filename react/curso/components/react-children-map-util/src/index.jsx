import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
	<div style={{border: "solid 2px blue"}}>
		<h3>index.jsx</h3>

		{/*
			passa a prop "lastName" apenas uma vez, o Family
			passa "lastName" para cada Member usando a function criada no utils/reactUtils.js
		*/}
		<Family lastName='Silva'>
			<Member name='Guilherme' />
			<Member name='Rafael' />
			<Member name='Júlia' />
		</Family>
	</div>
	, document.getElementById('app'))
