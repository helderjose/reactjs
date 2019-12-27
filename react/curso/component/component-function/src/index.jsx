import React from 'react';
import ReactDOM from 'react-dom';
// import Component from './component.jsx';
import Component from './component'; //sem extensao porque configuramos o "resolve" no webpack.config.js


ReactDOM.render(<Component/>, document.getElementById('app'))