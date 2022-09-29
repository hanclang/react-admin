import { normalizePath } from 'vite'
import url from 'url'
import bodyParser from 'body-parser'
import { pathToRegexp, match } from 'path-to-regexp'
import { mocks as mockData } from '../mock'

let isDev = false
let needSourcemap = false

/**
 * * viteMockServePlugin
 * @param {*} opt
 * @param {boolean} prodEnabled 生产环境是否开启mock
 * @param {string} injectFile 注入到哪个文件
 * @param {string} injectCode
 * @returns
 */
export default function viteMockServePlugin(opt = {}) {
  return {
    name: 'vite:mock',
    enforce: 'pre',

    configResolved(resolvedConfig) {
      isDev = resolvedConfig.command === 'serve'
      needSourcemap = !!resolvedConfig.build.sourcemap
    },

    configureServer: ({ middlewares }) => {
      const middleware = requestMiddleware()
      middlewares.use(bodyParser.json())
      middlewares.use(
        bodyParser.urlencoded({
          extended: true,
        })
      )
      middlewares.use(middleware)
    },
    /**
     * 生产环境如果不需要mock数据可以删除
     * @param {*} code
     * @param {*} id
     * @returns
     */
    transform(code, id) {
      const { injectFile, injectCode, prodEnabled = true } = opt
      if (isDev || !injectFile) {
        return null
      }
      if (!prodEnabled) {
        return null
      }
      const defaultEnter = normalizePath(injectFile)
      if (!id.endsWith(defaultEnter)) {
        return null
      }
      return {
        map: needSourcemap ? this.getCombinedSourcemap() : null,
        code: `${code}\n${injectCode}`,
      }
    },
  }
}

// request match
function requestMiddleware() {
  const middleware = (req, res, next) => {
    let queryParams = {}

    if (req.url) {
      queryParams = url.parse(req.url, true)
    }

    const reqUrl = queryParams.pathname

    const matchRequest = mockData.find((item) => {
      if (!reqUrl || !item || !item.url) {
        return false
      }
      if (item.method && item.method.toUpperCase() !== req.method) {
        return false
      }
      return pathToRegexp(item.url).test(reqUrl)
    })

    if (matchRequest) {
      const isGet = req.method && req.method.toUpperCase() === 'GET'
      const { response, statusCode, url } = matchRequest

      const urlMatch = match(url, { decode: decodeURIComponent })

      let query = queryParams.query
      if (reqUrl) {
        if ((isGet && JSON.stringify(query) === '{}') || !isGet) {
          const params = urlMatch(reqUrl).params
          if (JSON.stringify(params) !== '{}') {
            query = urlMatch(reqUrl).params || {}
          } else {
            query = queryParams.query || {}
          }
        }
      }

      res.setHeader('Content-Type', 'application/json')
      res.statusCode = statusCode || 200
      const mockResponse = response({ url: req.url, body: req.body, query, headers: req.headers })
      res.end(JSON.stringify(mockResponse))

      return
    }
    next()
  }
  return middleware
}
