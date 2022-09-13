import queryString from 'query-string'

/**
 * @param {string} url
 * @returns {Object}
 */
 export function param2Obj<T = any>(url: string) {
  const query: T = queryString.parse(decodeURIComponent(url.split('?')[1])) as any
  return query
}
