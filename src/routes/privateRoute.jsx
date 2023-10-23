import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import Dashboard from '@/layouts/dashboard/Dashboard'
import { checkAuth } from './CheckAuth'
const PrivateRoute = () => {
   const isAuthenticated = checkAuth()
   return isAuthenticated ? <RouteHome /> : <Navigate to="/login" />
}

const RouteHome = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Dashboard />}></Route>
         </Routes>
         <Outlet />
      </>
   )
}

export default PrivateRoute
