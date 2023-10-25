import React, { useEffect, useRef, useState } from 'react'
import FooterChat from '@/components/chat/FooterChat.jsx'
import HeaderChat from '@/components/chat/HeaderChat.jsx'
import InfoChat from '@/components/chat/InfoChat.jsx'
import useConversationStore from '@/stores/useConversationStore.jsx'
import MessageChat from '@/components/chat/MessageChat.jsx'
import useMessageStore from '@/stores/useMessageStore.jsx'
import { useSocket } from '@/stores/useSocket.jsx'

const MainChat = ({infoConversation,listMessage,msgRef,sendMessage}) => {
   const [showInfo,setShowInfo] = useState(true)


   const displayInfo = (status) => {
      setShowInfo(status)
   }

   const onSendMessage = (data) => {
      sendMessage(data)
   }

   return (
      <div className={`tyn-main tyn-chat-content ${showInfo ? "aside-shown":""}`}>
         <HeaderChat
            showInfo={showInfo}
            onDisplayInfo={displayInfo}
            infoConversation={infoConversation}
         />
         <MessageChat listMessage={listMessage}/>
         <InfoChat showInfo={showInfo} infoConversation={infoConversation}/>
         <FooterChat msgRef={msgRef} onSendMessage={onSendMessage}/>
      </div>
   )
}

export default MainChat