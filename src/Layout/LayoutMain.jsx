import React, { useEffect } from 'react'
import Header from '@/Layout/Header'
import { useStateContext } from '@/contexts/ContextProvider.jsx'

const LayoutMain = ({children}) => {
   const {setIsClicked,initialState} = useStateContext()
   useEffect(()=>{
      setIsClicked(initialState)
   },[])
   return (
      <div>
         <Header/>
         {children}
      </div>
   )
}

export default LayoutMain