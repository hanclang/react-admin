import Mock from 'mockjs'
import queryString from 'query-string'

const List: any[] = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: '@increment',
      timestamp: +Mock.Random.date('T'),
      name: '@name',
      'age|1-100': 100,
      address: '@county(true)',
      title: '@title(5, 10)',
      content_short: 'mock data',
      content: baseContent,
      forecast: '@float(0, 100, 2, 2)',
      importance: '@integer(1, 3)',
      tags: ['nice', 'developer', 'published', 'draft', 'cool', 'teacher', 'loser'].splice(Math.floor(Math.random() * 7), Math.floor(Math.random() * 8)),
      'status|1': ['published', 'draft'],
      display_time: '@datetime',
      comment_disabled: true,
      pageviews: '@integer(300, 5000)',
      image_uri,
      platforms: ['a-platform'],
    })
  )
}
Mock.mock(/list\/tableList/, 'post', function (config: { url: string }) {
  const params: { pageNumber?: number; pageSize?: number } = queryString.parse(config.url.slice(config.url.indexOf('?'))) as any
  const { pageNumber = 1, pageSize = 20 } = params
  let mockList = List.filter((item) => {
    if (item.tags.length === 0) item.tags = ['LOSER']
    return true
  })

  const pageList = mockList.filter((item, index) => index < pageSize * pageNumber && index >= pageSize * (pageNumber - 1))

  return {
    code: 200,
    data: {
      total: mockList.length,
      items: pageList,
    },
  }
})
