import React, { useState } from 'react'
import FooterChat from '@/components/chat/FooterChat.jsx'
import HeaderChat from '@/components/chat/HeaderChat.jsx'
import InfoChat from '@/components/chat/InfoChat.jsx'

const MainChat = () => {
   const [showInfo,setShowInfo] = useState(false)
   const displayInfo = (status) => {
      setShowInfo(status)
   }
   return (
      <div className={`tyn-main tyn-chat-content ${showInfo ? "aside-shown":""}`}>
         <HeaderChat showInfo={showInfo} onDisplayInfo={displayInfo}/>
         <InfoChat showInfo={showInfo}/>
         <FooterChat/>
      </div>
   )
}

export default MainChat