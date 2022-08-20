import React, { useContext } from 'react'
import style from '../index.scss'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { CollapsedContext } from '../context'

const { Header } = Layout
const HeaderComponent: React.FC = () => {
  const { collapsed, setCollapsed } = useContext(CollapsedContext)
  return (
    <Header
      className={style.siteLayoutBackground}
      style={{
        padding: 0,
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: style.trigger,
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>
  )
}
export default HeaderComponent