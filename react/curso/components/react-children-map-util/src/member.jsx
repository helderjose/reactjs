import React from 'react'

export default props => (
	<div style={{border: "solid 2px #000"}}>
		<h3>member.jsx</h3>
		{props.name} <strong>{props.lastName}</strong>
	</div>
)