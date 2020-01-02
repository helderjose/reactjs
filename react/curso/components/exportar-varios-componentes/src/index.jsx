import React from 'react';
import ReactDOM from 'react-dom';
import { Primeiro, Segundo } from './component';



ReactDOM.render(
    <div>
        <Primeiro/>
        <Segundo/>
    </div>

// devo colocar em um div ou em outro componente, senão dá erro.
/* <Primeiro/>
<Segundo/> */


, document.getElementById('app'))