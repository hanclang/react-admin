import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getToken } from 'utils/auth'

const Layout: React.FC = () => {
  const token = getToken()
  const location = useLocation()

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return (
    <div>
      <h1>layout</h1>
      <Outlet />
    </div>
  )
}
export default Layout
