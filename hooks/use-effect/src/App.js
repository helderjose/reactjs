/*

*/

import React, { useState, useEffect } from "react";

export default function App() {
  /*
  */
  const [count, setCount] = useState(0);
  // const [fruit, setFruit] = useState('banana');
  // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    // Similar a componentDidMount e componentDidUpdate:
    /*
    Esse exemplo é simples, no site
    https://pt-br.reactjs.org/docs/hooks-effect.html
    tem um exemplo mais complexo com duas functions dentro do useEffect.
    Aqui tbm, (olhe a sessão sobre  useeffect)
    https://pt-br.reactjs.org/docs/hooks-overview.html
    */
    useEffect(() => {
      // Atualiza o título do documento utilizando a API do navegador
      // sempre que count for alterado, useEffect é chamado
      console.log("useEffect()")
      document.title = `You clicked ${count} times`;
    });

  function increment() {
    console.log("incremente()")
    setCount(count + 1)
  }

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me - sem usar a function.
      </button>
      <br/><br/>

      <button onClick={() => increment()}>
        Click me - usa a function.
      </button>
    </>
  );
}

// exemplo com classe
/*
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
*/
