'use strict'

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const $ = require('whacko') //whacko é um módulo para manipular DOM no lado do server, como se fosse um jquery.
const Title = require('./title')

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Title)
)

console.log($(TitleComponent).get(0).tagName) // h1

