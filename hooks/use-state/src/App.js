/*
useState é um  hook.

*/

import React, { useState } from "react";

export default function App() {
  /*
  Declare uma nova variável de state, a qual chamaremos de "count"
  useState(0) valor inicial de count é 0.
  setCount substitui o this.setState
  */
  const [count, setCount] = useState(0);
  // const [fruit, setFruit] = useState('banana');
  // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  function increment() {
    console.log("No incremente()")
    setCount(count + 1)
  }

  return (
    // <> </> cria um "div invisível", não gera código html
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
