import React from 'react'
import Header from '@/Layout/Header'

const LayoutMain = ({children}) => {
   return (
      <div>
         <Header/>
         {children}
      </div>
   )
}

export default LayoutMain