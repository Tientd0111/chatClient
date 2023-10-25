import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { checkAuth } from './CheckAuth'
import Home from '@/pages/chat/Home.jsx'
const PrivateRoute = () => {
   const isAuthenticated = checkAuth()
   return isAuthenticated ? <Home /> : <Navigate to="/login" />
}

export default PrivateRoute
