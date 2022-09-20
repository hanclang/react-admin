import React from 'react'
import { DashboardOutlined, TableOutlined, UserOutlined } from '@ant-design/icons'
import { Navigate } from 'react-router-dom'

import Login from '@/pages/login'
import Layout from '@/layout'
import Dashboard from '@/pages/dashboard'
import NotFoundPage from '@/pages/404'
import TableList from '@/pages/TableList'
import List from '@/pages/List'
import EditTable from '@/pages/EditTable'
import ProfileCenter from '@/pages/profile/pages/center'
import ProfileSettings from '@/pages/profile/pages/settings'

export type route = {
  path: string
  component?: React.ReactNode
  children?: route[]
  icon?: React.ReactNode
  name?: string
  hidden?: boolean // if set true, item will not show in the sidebar(default is false)
  /**
   * if set true, item will not show in the sidebar(default is false)
   *
   * when visit http://localhost:3000 will navigate http://localhost:3000/dashboard
   */
  index?: boolean
}
const routes: route[] = [
  {
    path: '/login',
    component: <Login />,
    hidden: true,
  },
  {
    path: '/',
    component: <Layout />,
    hidden: true,
    children: [
      {
        path: '',
        index: true,
        component: <Navigate to="/dashboard" replace />,
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: <Dashboard />,
        icon: <DashboardOutlined />,
      },
      {
        path: '/list',
        name: '列表页',
        component: <List />,
        icon: <TableOutlined />,
        children: [
          {
            path: '',
            index: true,
            component: <Navigate to="/list/table-list" replace />,
          },
          {
            path: 'table-list',
            name: '查询表格',
            component: <TableList />,
          },
          {
            path: 'edit-table',
            name: 'Table 内编辑',
            component: <EditTable />,
          },
        ],
      },
      {
        path: 'profile',
        name: '个人页',
        icon: <UserOutlined />,
        children: [
          {
            path: 'center',
            name: '个人中心',
            component: <ProfileCenter />
          },
          {
            path: 'settings',
            name: '个人设置',
            component: <ProfileSettings />
          }
        ],
      },
      {
        path: '*',
        component: <NotFoundPage />,
        hidden: true,
      },
    ],
  },
]

export default routes
