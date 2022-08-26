import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import { getToken } from 'utils/auth'
import style from './index.scss'
import { Sider, Header, AppMain } from './components'
import { CollapsedContext } from './context'
import { useAppDispatch } from '@/models'
import { fetchUsers } from '@/models/userSlice'

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [isLogin, setIsLogin] = useState(false) // 是否需要登录
  const [loading, setLoading] = useState(true) // 获取用户信息前加载loading
  const dispatch = useAppDispatch()
  const token = getToken()
  const location = useLocation()

  useEffect(() => {
    if (token) {
      setLoading(true)
      dispatch(fetchUsers({ token })).then((res) => {
        setLoading(false)
      })
    } else {
      setIsLogin(true)
    }
  }, [])

  if (isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (loading) {
    return (
      <div className={style.loading}>
        <Spin spinning={loading} />
      </div>
    )
  }

  return (
    <CollapsedContext.Provider value={{ collapsed, setCollapsed }}>
      <Layout>
        <Sider />
        <Layout>
          <Header />
          <AppMain />
        </Layout>
      </Layout>
    </CollapsedContext.Provider>
  )
}

export default LayoutPage
