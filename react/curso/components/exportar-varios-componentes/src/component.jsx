import React from 'react';

const Primeiro = props => (
	<div style={{border: "solid 1px #000"}}>
		<h3>component.jsx -> primeiro</h3>
		<h1>Primeiro Componente!</h1>
	</div>
)


//mesma coisa do Primeiro só que como temos apenas uma instrução, podemos remover os parênteses.
const Segundo = props => <div style={{border: "solid 1px #000"}}><h3>component.jsx -> segundo</h3> <h1>Segundo Componente!</h1> </div>

// para poder usar o componente em outros arquivos.
export { Primeiro, Segundo }

/*
Aqui específico do react só tem as linhas do h1, que é a sintaxe de misturar html com Javascript,
o resto é Javascript comum.


Declaramos uma constante e atribuímos uma arrow function nela, essa arrow function retorna o pseudo html
do react.
const Segundo = props => (
    <h1>Segundo Componente!</h1>
)
*/





/*
Outra forma:

export default Primeiro = props => (
    <h1>Primeiro Componente!</h1>
)

export const Segundo = props => <h1>Segundo Componente!</h1>

//nao precisaria mais dessa linha
export { Primeiro, Segundo }


index.jsx
import Primeiro ,{ Segundo } from './component';
*/