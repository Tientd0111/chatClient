import React from 'react'
import Header from '@/Layout/Header'

const LayoutMain = ({children}) => {
   return (
      <div>
         <Header/>
         <div className="tyn-content tyn-content-full-height tyn-chat has-aside-base">
            {children}
         </div>
      </div>
   )
}

export default LayoutMain