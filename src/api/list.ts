import request from '@/utils/request'

export type item = {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}
export type TableListResponse = {
  total: number
  items: item[]
}

export function fetchTableList(params?: { pageNumber?: number; pageSize?: number }): Promise<BaseResponse<TableListResponse>> {
  return request({
    url: 'list/tableList',
    method: 'post',
    params,
  })
}