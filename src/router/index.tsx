import Login from '@/pages/login'
import Layout from '../layout'
import Dashboard from '@/pages/dashboard'
import React from 'react'
import NotFoundPage from '@/pages/404'

export type route = {
  path: string
  component: React.ReactNode
  children?: route[]
  icon?: React.ReactNode
  name?: string
  hidden?: boolean // if set true, item will not show in the sidebar(default is false)
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
        path: '/dashboard',
        name: 'dashboard',
        component: <Dashboard />,
      },
      {
        path: '/example',
        name: 'Example',
        component: <Dashboard />,
        children: [
          {
            path: 'table',
            name: 'Table',
            component: <Dashboard />,
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
