import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Space, Table, Tag } from 'antd'
import { fetchTableList, item } from '@/api/list'
import Search from './components/Search'
import style from "./index.scss";

const TableList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    pageSize: '10',
    pageNumber: '1',
  })
  const [data, setData] = useState<{
    total: number
    items: item[]
  }>({
    total: 0,
    items: [],
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_: string, { tags }: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'

            if (tag === 'loser') {
              color = 'volcano'
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: string, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a style={{ color: '#ff4d4f' }}>Delete</a>
        </Space>
      ),
    },
  ]
  useEffect(() => {
    getTableList({
      pageNumber: Number(searchParams.get('pageNumber')),
      pageSize: Number(searchParams.get('pageSize')),
    })
  }, [])

  // 获取列表数据
  function getTableList(params: { pageNumber?: number; pageSize?: number; name?: string; age?: string }) {
    fetchTableList(params).then((res) => {
      setData(res.data)
      setSearchParams(params as any)
    })
  }

  return (
    <div className={style.page}>
      <Search
        onSearch={(values) => {
          const params = {
            pageNumber: Number(searchParams.get('pageNumber')),
            pageSize: Number(searchParams.get('pageSize')),
            ...values,
          }
          getTableList(params)
        }}
      />
      <Table
        onChange={(pagination) => {
          const params = {
            name: searchParams.get('name') || '',
            age: searchParams.get('age') || '',
            pageNumber: pagination.current,
            pageSize: pagination.pageSize,
          }
          getTableList(params)
        }}
        pagination={{
          total: data.total,
          current: Number(searchParams.get('pageNumber')),
          pageSize: Number(searchParams.get('pageSize')),
        }}
        rowKey="id"
        columns={columns}
        dataSource={data.items}
      />
    </div>
  )
}

export default TableList
