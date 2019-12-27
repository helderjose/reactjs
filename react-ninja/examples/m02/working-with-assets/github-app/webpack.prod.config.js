'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const crp = new ExtractTextPlugin('crp.css')
const styles = new ExtractTextPlugin('[name]-[hash].css')

module.exports = validate({
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    crp,
    styles,

    // de prod
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    // de prod: minimifica javascritp e css
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    // DedupePlugin: nao deixa duplicar dependência com o mesmo conteúdo
    new webpack.optimize.DedupePlugin(),
    // OccurrenceOrderPlugin: ordena os arquivos chunk, carrega os arquivos menores primeiro
    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlPlugin({
      title: 'GitHub app',
      // para não injetar mais os plugins no arquivo gerado
      inject: false,
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules|(search|style)\.css/,
      include: /src/,
      loader: styles.extract('style', 'css')
    }, {
      test: /(search|style)\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loader: crp.extract('style', 'css')
    }]
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components')
    }
  }
})
