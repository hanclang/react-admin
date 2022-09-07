import React, { useContext, useEffect, useRef } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Space, Avatar, Dropdown } from 'antd'
import Headroom from 'headroom.js'
import { CollapsedContext } from '../context'
import style from './index.scss'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/models'
import DropdownMenu from '@/layout/components/DropdownMenu'
import { logout } from '@/models/userSlice'

const { Header } = Layout

const HeaderComponent: React.FC = () => {
  const { collapsed, setCollapsed } = useContext(CollapsedContext)
  const headerRef = useRef<HTMLElement>(null)
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const headroom = new Headroom(headerRef.current, {
      tolerance: 5,
      offset: 10,
    })
    headroom.init()
  }, [])
  return (
    // TODO: 要把收缩提取变量
    <Header ref={headerRef} className={style.header} style={{ left: collapsed ? 80 : 200 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: style.trigger,
        onClick: () => setCollapsed(!collapsed),
      })}
      <Dropdown overlay={<DropdownMenu logout={() => dispatch(logout())} />} overlayClassName={style.overlay} placement="bottom">
        <Space className={style.name} align="center">
          <Avatar src={user.avatar} />
          <span>{user.name}</span>
        </Space>
      </Dropdown>
    </Header>
  )
}
export default HeaderComponent
