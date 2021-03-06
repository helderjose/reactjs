'use strict'

const path = require('path')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

//   standard linter
  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat({
    test: /\.js$/,
    exclude: /node_modules/,
    // para o linter passar no arquivo config.js também
    // include: /src/,
    loader: 'standard'
  })

  newConfig.resolve = {
    alias: {
      // src: path.join(__dirname, '..', 'src'),
      // components: path.join(__dirname, '..', 'src', 'components'),
      utils: path.join(__dirname, '..', 'src', 'utils')
    }
  }

  return newConfig
}
