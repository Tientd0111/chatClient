import React, { useEffect, useRef, useState } from 'react'
import FooterChat from '@/components/chat/FooterChat.jsx'
import HeaderChat from '@/components/chat/HeaderChat.jsx'
import InfoChat from '@/components/chat/InfoChat.jsx'
import useConversationStore from '@/stores/useConversationStore.jsx'
import MessageChat from '@/components/chat/MessageChat.jsx'
import useMessageStore from '@/stores/useMessageStore.jsx'
import { useSocket } from '@/stores/useSocket.jsx'
import useWindowDimensions from '@/hook/useWindowDimensions.jsx'

const MainChat = ({callVideo,infoConversation,listMessage,msgRef,sendMessage,onTyping,listImage,showMessage,onChangeShowMessage}) => {
   const [showInfo,setShowInfo] = useState(false)
   const {width} = useWindowDimensions()

   const displayInfo = (status) => {
      setShowInfo(status)
   }

   const onSendMessage = (data) => {
      sendMessage(data)
   }

   return (
      <div className={`tyn-main tyn-chat-content 
         ${showInfo ? "aside-shown":""} 
         ${width < 768 ? "aside-collapsed":""}
         ${showMessage ? "main-shown":""}
      `}>
         <HeaderChat
            onChangeShowMessage={onChangeShowMessage}
            showInfo={showInfo}
            onDisplayInfo={displayInfo}
            infoConversation={infoConversation}
            callVideo={callVideo}
         />
         <MessageChat listMessage={listMessage}/>
         <InfoChat onDisplayInfo={displayInfo} showInfo={showInfo} infoConversation={infoConversation} listImage={listImage}/>
         <FooterChat onTyping={onTyping} msgRef={msgRef} onSendMessage={onSendMessage}/>
      </div>
   )
}

export default React.memo(MainChat)