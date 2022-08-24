import React from 'react'
import style from './app.scss'
import { Route, Routes } from 'react-router-dom'
import routes, { route } from '@/router'

/**
 * 生成路由
 * @param route
 */
function generateRoute(route: route) {
  if (route.children) {
    return (
      <Route key={route.path} path={route.path} element={route.component}>
        {route.children.map(generateRoute)}
      </Route>
    )
  }
  if (route.index) {
    // TODO:
    return <Route key="123456" index element={route.component} />
  }
  return <Route key={route.path} path={route.path} element={route.component} />
}

const App: React.FC = () => {
  return (
    <div>
      <Routes>{routes.map(generateRoute)}</Routes>
    </div>
  )
}

export default App
