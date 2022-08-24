import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import { getToken } from 'utils/auth'
import style from './index.scss'
import { Sider, Header, AppMain } from './components'
import { CollapsedContext } from './context'

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const token = getToken()
  const location = useLocation()

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return (
    <CollapsedContext.Provider value={{ collapsed, setCollapsed }}>
      <Layout>
        <Sider />
        <Layout style={{marginLeft: collapsed ? 80 : 200}}>
          <Header />
          <AppMain />
        </Layout>
      </Layout>
    </CollapsedContext.Provider>
  )
}

export default LayoutPage
