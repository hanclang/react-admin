import Login from '@/pages/login'
import Layout from '../../layout'
import Dashboard from '@/pages/dashboard'
import React from 'react'
import NotFoundPage from '@/pages/404'

export type route = {
  path: string
  component: React.ReactNode
  children?: route[]
}
const routes: route[] = [
  {
    path: '/login',
    component: <Login />,
  },
  {
    path: '/',
    component: <Layout />,
    children: [
      {
        path: '/dashboard',
        component: <Dashboard />,
      },
      {
        path: '*',
        component: <NotFoundPage />,
      },
    ],
  },
]

export default routes
