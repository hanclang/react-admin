import React from 'react'
import { GithubOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

interface DropdownMenuProps {
  logout: Function
}

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  return (
    <Menu
      items={[
        {
          key: '1',
          label: <Link to="/profile">个人中心</Link>,
          icon: <UserOutlined />,
        },
        {
          key: '2',
          label: <a>个人设置</a>,
          icon: <SettingOutlined />,
        },
        {
          key: '3',
          label: (
            <a href="https://github.com/hanclang/react-admin" target="_blank">
              项目地址
            </a>
          ),
          icon: <GithubOutlined />,
        },
        {
          type: 'divider',
        },
        {
          key: '4',
          label: (
            <a
              onClick={(e) => {
                e.stopPropagation()
                props.logout()
              }}
            >
              退出登录
            </a>
          ),
          icon: <LogoutOutlined />,
        },
      ]}
    />
  )
}

export default DropdownMenu
