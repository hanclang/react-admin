import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import style from "../index.scss";

const { Content } = Layout
const AppMain: React.FC = () => {
  return <Content
      style={{
          overflow: 'hidden',
          marginTop: 50,
          minHeight: 280,
      }}
  >
      <Outlet />
  </Content>
}
export default AppMain