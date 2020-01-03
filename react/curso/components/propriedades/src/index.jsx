import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';


/*
Passando a propriedade chamada value para o component.
Passa o valor da propriedade ao instanciar um componente.
*/
ReactDOM.render(
  <div style={{border: "solid 2px #000"}}>
    <h3>index.jsx</h3>
    <Component value="Minha propriedade!"/>
  </div>
, document.getElementById('app'))