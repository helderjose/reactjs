import React from 'react'

/**
 * children é um array de elementos.
*/
function childrenWithProps(children, props) {
    console.log("reactUtils.js children:", children)

    return React.Children.map(children, child => React.cloneElement(child, {...props}))
}

export { childrenWithProps }