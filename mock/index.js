const Mock = require('mockjs')
const queryString = require('query-string')
const users = require('./user.js')
const lists = require('./list.js')
const dashboards = require('./dashboard.js')

function param2Obj(url) {
  const query = queryString.parse(decodeURIComponent(url.split('?')[1]))
  return query
}

// require.context('./test', false, /\.test\.js$/);
const mocks = [...users, ...lists, ...dashboards]

function mockXHR() {
  mocks.forEach((item) => {
    Mock.mock(new RegExp(item.url), item.method || 'get', (options) => {
      const { body, type, url } = options
      // https://expressjs.com/en/4x/api.html#req
      const req = {
        url: url,
        method: type,
        body: JSON.parse(body),
        query: param2Obj(url),
      }
      const data = item.response(req)
      return data
    })
  })
}

module.exports = {
  mocks,
  mockXHR
}
