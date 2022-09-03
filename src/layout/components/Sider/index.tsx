import style from './index.scss'
import { Layout, Menu, MenuProps } from 'antd'
import React, { useContext, useMemo, useState } from 'react'
import { CollapsedContext } from '../../context'
import routes, { route } from '@/router'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const { Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number]

function getItem(routes: route[], menuItems: MenuItem[] = [], parentPath = '/'): MenuItem[] {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]
    if (route.index) {
      continue
    }
    const linkPath =
      parentPath.slice(0, parentPath.lastIndexOf('/') === parentPath.length - 1 ? parentPath.length - 1 : parentPath.length) + '/' + route.path.slice(route.path.indexOf('/') === 0 ? 1 : 0)

    if (!route.hidden) {
      const menuItem = {
        key: linkPath,
        icon: route?.icon,
        label: route.children ? route.name : <Link to={linkPath}>{route.name}</Link>,
      }
      if (route.children) {
        ;(menuItem as any).children = []
        ;(menuItem as any).children = getItem(route.children, (menuItem as any).children, linkPath)
      }
      menuItems.push(menuItem)
    } else if (route.hidden && route.children) {
      getItem(route.children, menuItems, linkPath)
    }
  }
  return menuItems
}

const SiderComponent: React.FC = () => {
  const { collapsed } = useContext(CollapsedContext)
  let location = useLocation()
  const openKeys = useMemo(() => {
    const paths = location.pathname.split('/')
    paths.shift()
    const keys: string[] = []
    for (let i = 0; i < paths.length; i++) {
      const path = keys.slice(i - 1, i) || ''
      keys.push(path + '/' + paths[i])
    }
    return keys
  }, [])

  const sider = useMemo(
    () => (
      <>
        <div className={classNames(style.transition, collapsed ? style.changePlaceholder : style.placeholder)} />
        <Sider className={style.sider} trigger={null} collapsible collapsed={collapsed}>
          <div className={style.logo} />
          <Menu defaultOpenKeys={openKeys} selectedKeys={[location.pathname]} theme="dark" mode="inline" items={getItem(routes)} />
        </Sider>
      </>
    ),
    [location.pathname, collapsed]
  )
  return sider
}

export default SiderComponent
