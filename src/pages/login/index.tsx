import React from 'react'
import style from './index.scss'
import { Button, Form, Input } from 'antd'
import { getUserInfo, login, LoginResponse, UserInfoResponse } from '@/api/user'
import { useNavigate } from 'react-router-dom'
import { setToken } from 'utils/auth'
import { AxiosResponse } from 'axios'
import { fetchUsers } from '@/models/userSlice'
import { useAppDispatch } from '@/models'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const onFinish = async (values: any) => {
    // TODO: 登录放在model里处理
    const loginRes: AxiosResponse<BaseResponse<LoginResponse>, any> = await login(values)
    const token = loginRes.data.data.token
    const resultAction = await dispatch(fetchUsers({ token }))
    // const infoRes: AxiosResponse<BaseResponse<UserInfoResponse>, any> = await getUserInfo({ token })
    setToken(token)
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
