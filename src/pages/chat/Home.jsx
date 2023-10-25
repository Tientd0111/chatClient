import React, { useEffect, useRef, useState } from 'react'
import LayoutMain from '@/Layout/LayoutMain'
import SideBarChat from '@/pages/chat/layout/SideBarChat.jsx'
import MainChat from '@/pages/chat/layout/MainChat.jsx'
import useConversationStore from '@/stores/useConversationStore.jsx'
import useMessageStore from '@/stores/useMessageStore.jsx'
import { useSocket } from '@/stores/useSocket.jsx'

const Home = () => {
   const [id,setId] = useState()
   const [listMessage,setListMessage] = useState()
   const msgRef = useRef()

   const idUser = JSON.parse(localStorage?.getItem("user"))._id
   const {getMyConversation,listConversation,getConversationById,infoConversation} = useConversationStore(state => ({
      getMyConversation: state.getMyConversation,
      listConversation: state.listConversation,
      getConversationById: state.getMyConversationById,
      infoConversation: state.infoConversation,
   }))

   const {getListMessage} = useMessageStore(state => ({
      getListMessage: state.getListMessage
   }))

   const {socket} = useSocket(state => ({
      socket: state.socket
   }))

   async function getMessage(id){
      await getListMessage(id).then(res => {
         setListMessage(res?.message)
      })
   }
   async function funcGetConversationById(id){
      await getConversationById(id)
   }

   async function funcGetMyConversation(){
      await getMyConversation(idUser)
   }

   useEffect(()=>{
      funcGetMyConversation()
   },[])

   useEffect(()=>{
      const addMessage = (msg) => {
         setListMessage(prevMessages => [...prevMessages, msg])
         funcGetMyConversation()
         msgRef.current.value = ""
      }
      socket.on(`return-message`,addMessage)

      return () => socket.off(`return-message`, addMessage);
   },[])

   const sendMessage = (data) => {
      const dataChat = {
         sender: idUser,
         content: data,
         conversation_id: id
      }
      socket.emit("send-message",dataChat)
      // console.log(dataChat)
   }



   useEffect(()=>{
      setId(listConversation?.[0]?._id)
   },[listConversation])

   useEffect(()=>{
      if(id){
         funcGetConversationById(id)
         getMessage(id)
      }
   },[id])



   const chooseConversation = (id) => {
      setId(id)
      getMessage(id)
      funcGetConversationById(id)
   }



   return (
      <LayoutMain>
         <div className="tyn-content tyn-content-full-height tyn-chat has-aside-base">
            <SideBarChat
               listConversation={listConversation}
               idConversation={id}
               chooseConversation={chooseConversation}
            />
            <MainChat infoConversation={infoConversation} listMessage={listMessage} msgRef={msgRef} sendMessage={sendMessage}/>
         </div>
      </LayoutMain>
   )
}

export default Home