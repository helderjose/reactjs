'use strict'

const path = require('path')

/*
patah.join coloca a barra de arcordo com o sistema operacional
*/
module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
