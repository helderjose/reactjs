'use strict'

const path = require('path')

/*
publicPath é onde o webpack fica ouvindo em memória o arquivo (no index.html tem que ter uma referência para plubicPath)
*/
module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  }
}
