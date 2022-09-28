import { PhoneNumber } from '@/components'
import { RootState } from '@/models'
import { UploadOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Input, Select, Space, Upload } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './index.scss'

const Base: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user)
  const [province, setProvince] = useState([])
  const [city, setCity] = useState([])

  useEffect(() => {
    axios.get('https://proapi.azurewebsites.net/api/geographic/province').then((res) => {
      setProvince(res.data.data)
    })
  }, [])

  const onProvinceChange = (value: string) => {
    if (!value) {
      return
    }
    axios.get(`https://proapi.azurewebsites.net//api/geographic/city/${value}`).then((res) => {
      setCity(res.data.data)
    })
  }
  return (
    <div className={style.baseView}>
      <div className={style.left}>
        <Form layout="vertical">
          <Form.Item initialValue="123456789@gmail.com" label="邮箱" name="email">
            <Input style={{ width: 328 }} allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item initialValue={user.name} label="昵称" name="name">
            <Input style={{ width: 328 }} allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item initialValue="聪明" label="个人简介" name="introduce">
            <Input.TextArea rows={5} allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item initialValue="CN" label="国家/地区" name="country">
            <Select style={{ width: 216 }} allowClear placeholder="请选择">
              <Select.Option key="CN">中国</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="所在省市">
            <Space>
              <Form.Item noStyle name="province">
                <Select allowClear onChange={onProvinceChange} style={{ width: 216 }} disabled={!province.length} placeholder="请选择">
                  {province.map((item: { id: string; name: string }) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item noStyle name="city">
                <Select allowClear style={{ width: 216 }} disabled={!city.length} placeholder="请选择">
                  {city.map((item: { id: string; name: string }) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item initialValue="海珠区工专路 88 号" label="街道地址" name="street">
            <Input style={{ width: 328 }} allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item initialValue={['123', '456132']} label="联系电话" name="phone">
            <PhoneNumber />
          </Form.Item>
          <Form.Item>
            <Button type="primary">提交</Button>
          </Form.Item>
        </Form>
      </div>
      <div className={style.right}>
        <div className={style.avatar_title}>头像</div>
        <Avatar alt="头像" src={user.avatar} size={144} />
        <div></div>
        <Upload>
          <div className={style.button_view}>
            <Button icon={<UploadOutlined />}>更换头像</Button>
          </div>
        </Upload>
      </div>
    </div>
  )
}

export default Base
