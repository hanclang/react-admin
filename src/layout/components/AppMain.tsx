import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout
const AppMain: React.FC = () => {
  return (
    <Content
      style={{
        marginTop: 50,
      }}
    >
      <Outlet />
    </Content>
  )
}
export default AppMain
