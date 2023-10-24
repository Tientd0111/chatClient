import React, { useEffect, useState } from 'react'
import FooterChat from '@/components/chat/FooterChat.jsx'
import HeaderChat from '@/components/chat/HeaderChat.jsx'
import InfoChat from '@/components/chat/InfoChat.jsx'
import useConversationStore from '@/stores/useConversationStore.jsx'
import MessageChat from '@/components/chat/MessageChat.jsx'

const MainChat = ({idConversation}) => {
   const [showInfo,setShowInfo] = useState(true)
   const displayInfo = (status) => {
      setShowInfo(status)
   }
   const {getConversationById,infoConversation} = useConversationStore(state => ({
      getConversationById: state.getMyConversationById,
      infoConversation: state.infoConversation
   }))

   async function fetchData(){
      await getConversationById(idConversation)
   }
   useEffect(()=>{
      fetchData()
   },[idConversation])

   return (
      <div className={`tyn-main tyn-chat-content ${showInfo ? "aside-shown":""}`}>
         <HeaderChat
            showInfo={showInfo}
            onDisplayInfo={displayInfo}
            infoConversation={infoConversation}
         />
         <MessageChat idConversation={idConversation}/>
         <InfoChat showInfo={showInfo} infoConversation={infoConversation}/>
         <FooterChat/>
      </div>
   )
}

export default MainChat