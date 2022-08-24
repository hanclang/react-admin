import React from 'react'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { login } from '@/models/userSlice'
import { useAppDispatch } from '@/models'

import style from './index.scss'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const onFinish = async (values: any) => {
    await dispatch(login(values))
    navigate('/', { replace: true })
  }

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.tit}>登录</div>
        <Form onFinish={onFinish} size="large" style={{ width: 280 }}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder="账号" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
          <div>
            <span>username: admin </span>
            <span> password: any</span>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
