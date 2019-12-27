'use strict'

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

  return newConfig
}
