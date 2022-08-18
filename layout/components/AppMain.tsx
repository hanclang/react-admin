import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import style from "../index.scss";

const { Content } = Layout
const AppMain: React.FC = () => {
  return <Content
      className={style.siteLayoutBackground}
      style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
      }}
  >
      <Outlet />
  </Content>
}
export default AppMain