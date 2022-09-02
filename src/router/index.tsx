import React from 'react'
import { DashboardOutlined, TableOutlined } from '@ant-design/icons'
import { Navigate } from 'react-router-dom'

import Login from '@/pages/login'
import Layout from '../layout'
import Dashboard from '@/pages/dashboard'
import NotFoundPage from '@/pages/404'
import TableList from '@/pages/TableList'
import List from '@/pages/List'

export type route = {
  path: string
  component?: React.ReactNode
  children?: route[]
  icon?: React.ReactNode
  name?: string
  hidden?: boolean // if set true, item will not show in the sidebar(default is false)
  index?: boolean // if set true, item will not show in the sidebar(default is false)
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
            path: 'table-list',
            name: '查询表格',
            component: <TableList />,
          },
          {
            path: 'tree',
            name: 'Tree',
            component: <Dashboard />,
          },
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
