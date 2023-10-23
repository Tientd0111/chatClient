import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { checkAuth } from './routes/checkAuth'
import Home from '@/pages/home/Home'
import React, { useEffect, useState } from 'react'
import { useStateContext } from '@/contexts/ContextProvider.jsx'

function App() {
   const isAuthenticated = checkAuth()
   const {currentMode} = useStateContext()
   console.log("zzz",currentMode)
   return (
      <div data-bs-theme={currentMode}>
         <div className={"tyn-body"}>
            <div className={"tyn-root"}>
               <div className="app">
                  <BrowserRouter>
                     <Routes>
                        <Route path="/" element={<Home />}>
                        </Route>
                     </Routes>
                  </BrowserRouter>
               </div>
            </div>
         </div>
      </div>

   )
}

export default App
