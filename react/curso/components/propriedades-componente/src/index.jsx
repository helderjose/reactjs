import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';


/*
Passando a propriedade chamada value para o component.
Passa o valor da propriedade ao instanciar um componente.
*/
ReactDOM.render(<Component value="Minha propriedade!"/>, document.getElementById('app'))