import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
	<div style={{border: "solid 2px orange"}}>
		<h3>family.jsx</h3>
		{console.log("family.jsx, props:", props)}
		{childrenWithProps(props.children, props)}
	</div>
)

