
const bodyParser = require('body-parser')
const { mocks } = require('./index.js')

module.exports = (middlewares, devServer) => {
  devServer.app.use(bodyParser.json())
  devServer.app.use(bodyParser.urlencoded({
    extended: true
  }))
  mocks.forEach(user => {
    devServer.app[user.method](user.url, (req, res) => {
      const data = user.response(req)
      res.json(data)
    })
  })
  return middlewares
}
