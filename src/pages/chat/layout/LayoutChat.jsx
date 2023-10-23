import React from 'react'
import SideBarChat from '@/pages/chat/layout/SideBarChat.jsx'
import MainChat from '@/pages/chat/layout/MainChat.jsx'

const LayoutChat = () => {
   return (
      <div className="tyn-content tyn-content-full-height tyn-chat has-aside-base">
         <SideBarChat/>
         <MainChat/>
      </div>
   )
}

export default LayoutChat