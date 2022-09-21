const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: process.env.BUILD_ENV === 'github' ? '/react-admin' : '/',
  },
})
