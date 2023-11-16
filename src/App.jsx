import { BrowserRouter, Navigate, Route, Routes as ListRoute } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useStateContext } from '@/contexts/ContextProvider.jsx'
import Login from '@/pages/user/Login.jsx'
import useUserStore from '@/stores/useUserStore.jsx'
import Contact from '@/pages/contact/Contact.jsx'
import path from '@/constants/path.jsx'
import Chat from '@/pages/chat/Chat'
import Story from '@/pages/story/Story.jsx'
import haversine from 'haversine';

// import { privateRoutes, routes } from '@/routes/index.js'

function App() {
   const {currentMode} = useStateContext()

   const token = localStorage.getItem("key")

   const {getMyInfo,setLocation} = useUserStore(state => ({
      getMyInfo: state.getMyInfo,
      setLocation: state.setLocation
   }))

   useEffect(()=>{
      async function fetchData(){
         await getMyInfo()
      }
      if(token){
         fetchData()
      }
   },[])

   const [currentLocation, setCurrentLocation] = useState(null);
   useEffect(() => {
      const watchId = navigator.geolocation.watchPosition(
         (position) => {
            const newLocation = {
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
            };
            // if (newLocation?.lat !== currentLocation?.lat && newLocation?.lng !== currentLocation?.lng) {
            //    setCurrentLocation(newLocation);
            //    setLocation(newLocation);
            // }
            console.log("curr",currentLocation)
            if (currentLocation) {
               const distance = haversine(currentLocation, newLocation, { unit: 'meter' });
               console.log("x",distance)
               if (distance > 100) {
                  setCurrentLocation(newLocation);
                  setLocation(newLocation);

               }
            } else {
               console.log("y")
               setCurrentLocation(newLocation);
               setLocation(newLocation);
            }
         },
         (error) => {
            console.error(error);
         },
         {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
         }
      )

      return () => {
         navigator.geolocation.clearWatch(watchId);
      };
   }, []);


   return (
      <div data-bs-theme={currentMode}>
         <div className={"tyn-body"}>
            <div className={"tyn-root"}>
               <div className="app">
                     <ListRoute>
                        <Route element={<Login/>} path={path.LOGIN} />
                     </ListRoute>
                     <RequireAuth>
                        <ListRoute>
                           <Route element={<Chat/>} path={path.CHAT} />
                           <Route element={<Contact/>} path={path.CONTACT} />
                           <Route element={<Story/>} path={path.STORY} />
                        </ListRoute>
                     </RequireAuth>
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
