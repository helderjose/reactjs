import React from 'react'
import ReactDOM from 'react-dom'

import Component from './component.jsx'

/*
sem a extensao tambem funciona, por causa da configuracao do webpack.config.js
extensions: ['', '.js', '.jsx'] veja no ex.3
*/
// import Component from './component'

ReactDOM.render(<Component />, document.getElementById('app'))