import React, { useCallback, useEffect, useRef, useState } from 'react'
import LayoutMain from '@/Layout/LayoutMain'
import SideBarChat from '@/pages/chat/layout/SideBarChat.jsx'
import MainChat from '@/pages/chat/layout/MainChat.jsx'
import useConversationStore from '@/stores/useConversationStore.jsx'
import useMessageStore from '@/stores/useMessageStore.jsx'
import { useSocket } from '@/stores/useSocket.jsx'
import ModalCallVideo from '@/components/modal/ModalCallVideo.jsx'
import { usePeerContext } from '@/contexts/Peer.jsx'
import ModalncomingCall from '@/components/modal/ModalncomingCall'
import ModalOnGoingCall from '@/components/modal/ModalOnGoingCall.jsx'

const Home = () => {
   const msgRef = useRef()
   const call = useRef()
   const incomingCall = useRef()
   const ongoingCall = useRef()
   const {peer,createOffer,createAnswere,setRemoteAns,sendStream,remoteStream} = usePeerContext()

   const [listMessage,setListMessage] = useState()
   const [callFrom,setCallFrom] = useState()
   const [id,setId] = useState()
   const [listImage,setListImage] = useState()
   const [myStream,setMyStream] = useState()
   const [infoCall,setInfoCall] = useState()

   const idUser = JSON.parse(localStorage?.getItem("user"))._id

   const {getMyConversation,listConversation,getConversationById,infoConversation} = useConversationStore(state => ({
      getMyConversation: state.getMyConversation,
      listConversation: state.listConversation,
      getConversationById: state.getMyConversationById,
      infoConversation: state.infoConversation,
   }))

   const {getListMessage,getListImage} = useMessageStore(state => ({
      getListMessage: state.getListMessage,
      getListImage: state.getListImage
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

      socket.on("getOnlineUser", (data) =>{
         console.log("x",data)
      })

      socket.on("incoming-call", (data) => {
         setCallFrom(data)
         incomingCall?.current?.open()
      })

      socket.on("accepted",async (data) => {
         const {ans} = data
         await setRemoteAns(ans)
         sendStream(myStream)
         if(ans){
            call?.current?.close()
            incomingCall?.current?.close()
            ongoingCall?.current?.open()
         }
      })
      return () => socket.off();
   },[])

   const sendMessage = (data) => {
      const dataChat = {
         sender: idUser,
         content: data.content,
         conversation_id: id,
         message_image: data?.message_image?.files?.length > 0 ? data.message_image.files: []
      }
      socket.emit("send-message",dataChat)
      // console.log(data)
   }

   const onTyping = (e) => {
      e.preventDefault()
      socket.emit('typing',id)
   }


   useEffect(() => {
      if (!id) {
         setId(listConversation?.[0]?._id)
         getListImage(listConversation?.[0]?._id).then(res => {
            setListImage(res?.list_image)
         })
      } else {
         funcGetConversationById(id)
         getMessage(id)
         socket.emit("join", id)
         getListImage(id).then(res => {
            setListImage(res?.list_image)
         })
      }
   }, [id, listConversation])


   const chooseConversation = (id) => {
      setId(id)
      getMessage(id)
      funcGetConversationById(id)
      socket.emit("join",id)
      getListImage(id).then(res => {
         setListImage(res?.list_image)
      })
   }

   const callVideo = async (data) => {
      call?.current?.open()
      const offer = await createOffer()
      setInfoCall(data)
      const body = {
         arrive: data.arrive,
         call_from: data.call_from,
         offer: offer
      }
      socket.emit("call-video",body)
   }

   const acceptCall = async (data) => {
      const ans = await createAnswere(callFrom?.offer)
      socket.emit("call-accepted",{call_from: callFrom?.from,ans: ans})
   }

   const endCall = (data) => {
      call?.current?.close()
   }
   const handleNegotiation = useCallback(()=>{
      const localOffer = peer.localDescription
      const body = {
         arrive: infoCall.arrive,
         call_from: infoCall.call_from,
         offer: localOffer
      }
      socket.emit("call-video",body)
   },[])
   useEffect(()=>{
      peer.addEventListener("negotiationneeded",handleNegotiation)
      return () => {
         peer.removeEventListener("negotiationneeded",handleNegotiation)
      }
   },[])

   const getUserMediaStream = useCallback(async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
         audio: true,
         video: true
      })
      console.log("video",stream)
      setMyStream(stream)
   },[])

   useEffect(()=>{
      getUserMediaStream()
   },[getUserMediaStream])

   return (
      <LayoutMain>
         <div className="tyn-content tyn-content-full-height tyn-chat has-aside-base">
            <SideBarChat
               listConversation={listConversation}
               idConversation={id}
               chooseConversation={chooseConversation}
            />
            <MainChat endCall={endCall} callVideo={callVideo} listImage={listImage} onTyping={onTyping} infoConversation={infoConversation} listMessage={listMessage} msgRef={msgRef} sendMessage={sendMessage}/>
         </div>
         <ModalCallVideo ref={call} endCall={endCall}/>
         <ModalncomingCall ref={incomingCall} acceptCall={acceptCall}/>
         <ModalOnGoingCall ref={ongoingCall} myStream={myStream}/>
      </LayoutMain>
   )
}

export default Home