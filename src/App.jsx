import { BrowserRouter, Navigate, Route, Routes as ListRoute } from 'react-router-dom'
import Home from '@/pages/chat/Home'
import React, { useEffect } from 'react'
import { useStateContext } from '@/contexts/ContextProvider.jsx'
import Login from '@/pages/user/Login.jsx'
import useUserStore from '@/stores/useUserStore.jsx'
import Contact from '@/pages/contact/Contact.jsx'
import path from '@/constants/path.jsx'
import Chat from '@/pages/chat/Chat'

// import { privateRoutes, routes } from '@/routes/index.js'

function App() {
   const {currentMode} = useStateContext()

   const token = localStorage.getItem("key")

   const {getMyInfo} = useUserStore(state => ({
      getMyInfo: state.getMyInfo,
   }))

   useEffect(()=>{
      async function fetchData(){
         await getMyInfo()
      }
      if(token){
         fetchData()
      }
   },[])



   return (
      <div data-bs-theme={currentMode}>
         <div className={"tyn-body"}>
            <div className={"tyn-root"}>
               <div className="app">
                  <BrowserRouter>
                     <ListRoute>
                        <Route element={<Login/>} path={path.LOGIN} />
                     </ListRoute>
                     <RequireAuth>
                        <ListRoute>
                           <Route element={<Chat/>} path={path.CHAT} />
                           <Route element={<Contact/>} path={path.CONTACT} />
                        </ListRoute>
                     </RequireAuth>
                  </BrowserRouter>
               </div>
            </div>
         </div>
      </div>

   )
}
function RequireAuth({children}) {
   const user = JSON.parse(localStorage.getItem('user'))
   if(user?._id === undefined){
      return <Navigate to={path.LOGIN}/>
   }
   return children
}
export default App
