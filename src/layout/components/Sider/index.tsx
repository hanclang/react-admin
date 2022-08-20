import style from '../../index.scss'
import { Layout, Menu, MenuProps } from 'antd'
import React, { useContext } from 'react'
import { CollapsedContext } from '../../context'
import routes, { route } from '@/router'
import { Link } from 'react-router-dom'

const { Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number]

function getItem(routes: route[], menuItems: MenuItem[] = []): MenuItem[] {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]
    if (!route.hidden) {
      const menuItem = {
        key: route.path,
        icon: route?.icon,
        label: route.children ? route.name : <Link to={route.path}>{route.name}</Link>,
      }
      if (route.children) {
        ;(menuItem as any).children = []
        ;(menuItem as any).children = getItem(route.children, (menuItem as any).children)
      }
      menuItems.push(menuItem)
    } else if (route.hidden && route.children) {
      getItem(route.children, menuItems)
    }
  }
  return menuItems
}

const SiderComponent: React.FC = () => {
  const { collapsed } = useContext(CollapsedContext)
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className={style.logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={getItem(routes)} />
    </Sider>
  )
}

export default SiderComponent
