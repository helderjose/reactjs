import React from 'react'


export default props => (
    <div>
        <h1>Família</h1>


        {/* percorre cada elemento filho (props.children) e passa um clone de props para ele.
        Próximo exemplo coloca o map em um util.js */}
        { React.Children.map(props.children,
            child => React.cloneElement(child, {...props})) }
    </div>
)

