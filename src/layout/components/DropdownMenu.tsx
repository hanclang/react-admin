import React from 'react'
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

interface DropdownMenuProps {
  logout: Function
}

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  return (
    <Menu
      items={[
        {
          key: '1',
          label: <a>个人中心</a>,
          icon: <UserOutlined />,
        },
        {
          key: '2',
          label: <a>个人设置</a>,
          icon: <SettingOutlined />,
        },
        {
          type: 'divider',
        },
        {
          key: '3',
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
