import React from 'react'

export default props => (
    /*
        passa os elementos do pai para o filho, o campo lastName do index.jsx
        */
    <div>
        { React.Children.map(props.children,
            child => React.cloneElement(child, {...props})) }
    </div>
)