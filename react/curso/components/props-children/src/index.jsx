import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
	<div style={{border: "solid 3px blue"}}>
		<h3>index.jsx</h3>
		<Family>
			{/* member vai ser passado para family por causa da do props.children */}
			<Member name='Guilherme' lastName='Silva' />
		</Family>
	</div>
	, document.getElementById('app'))