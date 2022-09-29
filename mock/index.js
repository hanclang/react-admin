import Mock from 'mockjs'
import queryString from'query-string'
import users from'./user.js'
import lists from'./list.js'
import dashboards from'./dashboard.js'

function param2Obj(url) {
  const query = queryString.parse(decodeURIComponent(url.split('?')[1]))
  return query
}

// require.context('./test', false, /\.test\.js$/);
export const mocks = [...users, ...lists, ...dashboards]

export function mockXHR() {
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
