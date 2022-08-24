import React, { useContext } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Space, Avatar, Dropdown } from 'antd'
import { CollapsedContext } from '../context'
import style from './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import {RootState, useAppDispatch} from '@/models'
import DropdownMenu from '@/layout/components/DropdownMenu'
import { logout } from '@/models/userSlice'

const { Header } = Layout

const HeaderComponent: React.FC = () => {
  const { collapsed, setCollapsed } = useContext(CollapsedContext)
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useAppDispatch()
  return (
    <Header className={style.header}>
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
