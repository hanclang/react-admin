import React from 'react'
import { Button, Card, Col, Form, Input, Row, Space } from 'antd'

interface SearchProps {
  onSearch: (values: { name?: string; age?: string; pageNumber?: number }) => void
}

const Search: React.FC<SearchProps> = (props) => {
  const { onSearch } = props
  const onFinish = (values: { name?: string; age?: string }) => {
    onSearch({
      name: values.name || '',
      age: values.age || '',
      pageNumber: 1,
    })
  }
  return (
    <Card style={{ marginBottom: 16 }} bodyStyle={{ padding: '24px 24px 0px' }}>
      <Form onFinish={onFinish} labelAlign="right" wrapperCol={{ style: { maxWidth: 'calc(100% - 120px)' } }} labelCol={{ style: { flex: '0 0 120px' } }}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="name" label="姓名">
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="age" label="年龄">
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item colon={false} label=" " wrapperCol={{ style: { maxWidth: '100%', textAlign: 'right' } }} labelCol={{ style: { flex: '0 0 0' } }}>
              <Space size={8} align="end">
                <Button>重置</Button>
                <Button htmlType="submit" type="primary">
                  查询
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

export default Search
