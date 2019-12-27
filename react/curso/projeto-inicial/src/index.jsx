import React from 'react';
import ReactDOM from 'react-dom';

/*
id app é o div do public/index.html.
Não usar esse modo, usar arrow function.
*/
ReactDOM.render(<h1>Olá React</h1>, document.getElementById('app'))


// Esse também funciona
// ReactDOM.render(
//     <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//     </ul>,
//     document.getElementById('app'))