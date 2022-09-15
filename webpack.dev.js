// webpack.dev.js
const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    historyApiFallback: true,
    port: '3000',
    compress: false,
    setupMiddlewares: require('./mock/mock-server.js'),
  },
})
