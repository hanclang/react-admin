import React from 'react'
import style from './index.scss'
import { Button, Form, Input } from 'antd'
import { login } from '@/api/user'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log('Success:', values)
    login(values).then((res) => {
      navigate('/', { replace: true })
    })
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
