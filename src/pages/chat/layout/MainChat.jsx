import React, { useEffect, useRef, useState } from 'react'
import FooterChat from '@/components/chat/FooterChat.jsx'
import HeaderChat from '@/components/chat/HeaderChat.jsx'
import InfoChat from '@/components/chat/InfoChat.jsx'
import useConversationStore from '@/stores/useConversationStore.jsx'
import MessageChat from '@/components/chat/MessageChat.jsx'
import useMessageStore from '@/stores/useMessageStore.jsx'

const MainChat = ({idConversation}) => {
   const [showInfo,setShowInfo] = useState(true)
   const [listMessage,setListMessage] = useState()
   const msgRef = useRef()

   const id = JSON.parse(localStorage?.getItem("user"))._id

   const displayInfo = (status) => {
      setShowInfo(status)
   }
   const {getConversationById,infoConversation} = useConversationStore(state => ({
      getConversationById: state.getMyConversationById,
      infoConversation: state.infoConversation,
   }))
   const {getListMessage} = useMessageStore(state => ({
      getListMessage: state.getListMessage
   }))



   async function getMessage(){
      if(idConversation){
         await getListMessage(idConversation).then(res => {
            setListMessage(res?.message)
         })
      }
   }
   async function fetchData(){
      if(idConversation){
         await getConversationById(idConversation)
      }
   }
   useEffect(()=>{
      fetchData()
      getMessage()
   },[idConversation])

   console.log(listMessage)
   const sendMessage = (data) => {
      const dataChat = {
         sender: {_id:id},
         content: data,
         conversation_id: idConversation
      }
      setListMessage(prevMessages => [...prevMessages, dataChat])
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
         <FooterChat msgRef={msgRef} sendMessage={sendMessage}/>
      </div>
   )
}

export default MainChat