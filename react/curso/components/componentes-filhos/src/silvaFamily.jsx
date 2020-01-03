import React from 'react'
import Member from './member'

export default props => (
	<div style={{border: "solid 2px orange"}}>
		<h3>silvaFamily.jsx</h3>
		<Member name='João' lastName='Silva' />
		<Member name='Maria' lastName='Silva' />
		<Member name='José' lastName='Silva' />
		<Member name='Pedro' lastName='Silva' />
	</div>
)


// poderia deixar sem o porps porque não está sendo usado nesse exemplo
// export default () => (
//     <div>
//         <Member name='João' lastName='Silva'/>
//         <Member name='Maria' lastName='Silva'/>
//         <Member name='José' lastName='Silva'/>
//         <Member name='Pedro' lastName='Silva'/>
//     </div>
// )