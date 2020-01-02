import React from 'react';

export default (props) => (
    <h1>{props.value}</h1>  // exibe a propriedade value passada pelo index.jsx
)



//quando tem apenas um parâmetro, posso remover os parênteses
// export default props => (
//     <h1>{props.value}</h1>
// )