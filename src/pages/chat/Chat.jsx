import React, { useCallback, useEffect, useRef, useState } from 'react'
import LayoutMain from '@/Layout/LayoutMain'
import SideBarChat from '@/pages/chat/layout/SideBarChat.jsx'
import MainChat from '@/pages/chat/layout/MainChat.jsx'
import useConversationStore from '@/stores/useConversationStore.jsx'
import useMessageStore from '@/stores/useMessageStore.jsx'
// import { useSocket } from '@/stores/useSocket.jsx'
import ModalCallVideo from '@/components/modal/ModalCallVideo.jsx'
import ModalncomingCall from '@/components/modal/ModalncomingCall'
import ModalOnGoingCall from '@/components/modal/ModalOnGoingCall.jsx'
import PeerService from '../../constants/Peer'
import useWindowDimensions from '@/hook/useWindowDimensions.jsx'
import { useSocket } from '@/contexts/SocketProvider.jsx'
import ModalFriend from '@/components/modal/ModalFriend.jsx'

const Home = () => {
   const modalListFriend = useRef()
   const msgRef = useRef()
   const call = useRef()
   const incomingCall = useRef()
   const ongoingCall = useRef()
   // const {peer,createOffer,createAnswere,setRemoteAns,sendStream,remoteStream} = usePeerContext()
   const {width} = useWindowDimensions()

   const [listMessage, setListMessage] = useState()
   let [id, setId] = useState()
   const [listImage, setListImage] = useState()
   const [myStream, setMyStream] = useState(null)
   const [infoCall, setInfoCall] = useState()
   const [remoteStream, setRemoteStream] = useState(null)
   const [mic, setMic] = useState(true)
   const [video, setVideo] = useState(true)
   const [showMessage, setShowMessage] = useState(false)

   const idUser = JSON.parse(localStorage?.getItem('user'))._id
   const {
      getMyConversation,
      listConversation,
      getConversationById,
      infoConversation,
      createConversation,
      setInfoConversation,
   } = useConversationStore(state => ({
      getMyConversation: state.getMyConversation,
      listConversation: state.listConversation,
      getConversationById: state.getMyConversationById,
      infoConversation: state.infoConversation,
      createConversation: state.createConversation,
      setInfoConversation: state.setInfoConversation
   }))

   const { getListMessage, getListImage } = useMessageStore(state => ({
      getListMessage: state.getListMessage,
      getListImage: state.getListImage,
   }))

   const socket = useSocket();

// CHAT MESSAGE
   async function getMessage(id) {
      await getListMessage(id).then(res => {
         setListMessage(res?.message)
      })
   }

   async function funcGetConversationById(id) {
      await getConversationById(id)
   }

   async function funcGetMyConversation() {
      await getMyConversation(idUser)
   }

   useEffect(() => {
      funcGetMyConversation()
   }, [])


   useEffect(() => {
      const addMessage = (msg) => {
         setListMessage(prevMessages => [...prevMessages, msg])
         funcGetMyConversation()
         msgRef.current.value = ''
      }
      socket.on(`return-message`, addMessage)

      socket.on('getOnlineUser', (data) => {
      })

      return () => socket.off()
   }, [])

   const sendMessage = (data) => {
      const dataChat = {
         sender: idUser,
         content: data.content,
         conversation_id: id,
         message_image: data?.message_image?.files?.length > 0 ? data.message_image.files : [],
      }
      socket.emit('send-message', dataChat)
   }

   const onTyping = (e) => {
      e.preventDefault()
      socket.emit('typing', id)
   }

   useEffect(()=>{
      if(id === undefined){
         setId(listConversation?.[0]?._id)
         // getListImage(listConversation?.[0]?._id).then(res => {
         //    setListImage(res?.list_image)
         // })
      }
   },[listConversation])

   useEffect(() => {
      funcGetConversationById(id)
      getMessage(id)
      socket.emit('join', id)
      getListImage(id).then(res => {
         setListImage(res?.list_image)
      })
   }, [id, listConversation])




   const chooseConversation = (id) => {
      setShowMessage(true)
      setId(id)
      getMessage(id)
      funcGetConversationById(id)
      socket.emit('join', id)
      getListImage(id).then(res => {
         setListImage(res?.list_image)
      })
   }

   const handleOpenListFriend = () => {
      modalListFriend.current.open()
   }

   const handleCreateConversation = (data) => {
      const body = {
         user_1: idUser,
         user_2: data
      }
      createConversation(body).then(res => {
         if(res?.status === 200){
            setInfoConversation(res?.conversation)
            modalListFriend.current.close()
            setId(res?.conversation?._id)
            getMyConversation(idUser)
         }
      })
   }
//CHAT MESSAGE
//CALL Video
   const callVideo = async (data) => {
      const offer = await PeerService.getOffer()
      const body = {
         arrive: data.arrive,
         call_from: data.call_from,
         conversation_id: id,
         offer: offer,
      }
      const stream = await navigator.mediaDevices.getUserMedia({
         audio: true,
         video: true,
      })
      console.log("xxxxxxx",stream)
      socket.emit('call-video', body)
      setMyStream(stream)
      call.current.open()
   }

   const handleIncommingCall = async (data) => {
      incomingCall.current.open()
      setInfoCall(data)
      const stream = await navigator.mediaDevices.getUserMedia({
         audio: true,
         video: true,
      })
      setMyStream(stream)
      console.log(`Incoming Call`, data.offer);
   }

   const acceptCall = async () => {
      const ans = await PeerService.getAnswer(infoCall.offer)
      socket.emit('call-accepted', { conversation_id: id, ans: ans })
      incomingCall?.current?.close()
      ongoingCall?.current?.open()
   }

   const sendStreams = useCallback(() => {
      for (const track of myStream.getTracks()) {
         PeerService.peer.addTrack(track, myStream)
      }
   }, [myStream])

   const handleCallAccepted = useCallback(
      ({ ans }) => {
         PeerService.setLocalDescription(ans)
         console.log('Call Accepted!')
         if (ans) {
            call?.current?.close()
            ongoingCall?.current?.open()
         }
         sendStreams()
      },
      [sendStreams],
   )
   console.log("log bên ngoài", id)
   const handleNegoNeeded = useCallback(async () => {
      const offer = await PeerService.getOffer()
      console.log("id",id)
      const data = {
         offer: offer,
         conversation_id: id,
         call_form: idUser
      }

      socket.emit('needed', data)
   },[id])

   useEffect(() => {
      PeerService.peer.addEventListener('negotiationneeded', handleNegoNeeded)
      return () => {
         PeerService.peer.removeEventListener('negotiationneeded', handleNegoNeeded)
      }
   }, [id])

   const handleNegoNeedIncomming = useCallback(async ({ from, offer,conversation_id }) => {
      const ans = await PeerService.getAnswer(offer)
      const data = { conversation_id: conversation_id, call_form: idUser, offer: ans }
      console.log("data",data)
      socket.emit('done', data)
      sendStreams()
   },[sendStreams])

   const handleNegoNeedFinal = useCallback(async ({ ans }) => {
      console.log("aaa",ans)
      await PeerService.setLocalDescription(ans)
   },[])

   useEffect(() => {
      PeerService.peer.addEventListener('track', async (ev) => {
         const remoteStream = ev.streams
         console.log('GOT TRACKS!!')
         setRemoteStream(remoteStream[0])

      })
   }, [])


   const handleVideo = useCallback(() => {
      const videoTrack = myStream.getVideoTracks()[0]
      if(video){
         setVideo(false)
         videoTrack.enabled = false
      }else {
         setVideo(true)
         videoTrack.enabled = true
      }
      socket.emit("change-video",{conversation_id: id,status: videoTrack.enabled})
   },[video,myStream])

   const handleMic = useCallback(() => {
      const audioTrack = myStream.getAudioTracks()[0]
      if(mic){
         setMic(false)
         return audioTrack.enabled = false
      }else {
         setMic(true)
         return audioTrack.enabled = true
      }
   },[mic,myStream])

   const handleEndCall = useCallback((data) => {
      // PeerService.peer.close()
      // for (const track of myStream.getTracks()) {
      //    track.stop();
      // }

      // myStream.removeTrack(videoTrack)
      // myStream.removeTrack(audioTrack)
      // setRemoteStream(null)
      // setMyStream(null)
      ongoingCall?.current?.close()
      incomingCall?.current?.close()
      call?.current?.close()
   },[remoteStream])

   useEffect(() => {
      socket.on('incoming-call', handleIncommingCall)
      socket.on('accepted', handleCallAccepted)
      socket.on('return-needed', handleNegoNeedIncomming)
      socket.on('final', handleNegoNeedFinal)
      socket.on('end', handleEndCall)
      // socket.on('status-video', handleChangeStatusVideo)

      return () => {
         socket.off('incoming-call', handleIncommingCall)
         socket.off('accepted', handleCallAccepted)
         socket.off('return-needed', handleNegoNeedIncomming)
         socket.off('final', handleNegoNeedFinal)
         socket.off('end', handleEndCall)
      }
   }, [
      handleIncommingCall,
      handleCallAccepted,
      handleNegoNeedIncomming,
      handleNegoNeedFinal,
      handleEndCall
   ])
   // switch camera
   const switchCamera = () => {
      myStream.getVideoTracks().forEach(function(track) {
         const sender = PeerService.peer.getSenders().find(function(s) {
            return s.track.kind == track.kind;
         });
         sender.replaceTrack(track);
      });
   };

   const endCall = async (data) => {
      console.log("aaa",id)
      socket.emit("end-call", {conversation_id: id,from: idUser})
   }

// CALL VIDEO
   // mobile
   const onChangeShowMessage = () => {
      setShowMessage(false)
   }



   return (
      <LayoutMain>
         <div className='tyn-content tyn-content-full-height tyn-chat has-aside-base'>
            <SideBarChat
               listConversation={listConversation}
               idConversation={id}
               chooseConversation={chooseConversation}
               handleOpenListFriend={handleOpenListFriend}
            />
            <MainChat callVideo={callVideo} listImage={listImage} onTyping={onTyping}
                      infoConversation={infoConversation} listMessage={listMessage} msgRef={msgRef}
                      sendMessage={sendMessage}
                      showMessage={showMessage}
                      onChangeShowMessage={onChangeShowMessage}
            />
         </div>
         <ModalCallVideo  infoConversation={infoConversation} myStream={myStream} ref={call} />
         <ModalncomingCall infoConversation={infoConversation} ref={incomingCall} acceptCall={acceptCall} />
         <ModalOnGoingCall video={video} handleMic={handleMic} sendStreams={handleVideo} endCall={endCall} mic={mic} ref={ongoingCall} myStream={myStream} remoteStream={remoteStream} />
         <ModalFriend ref={modalListFriend} handleCreateConversation={handleCreateConversation} />
      </LayoutMain>
   )
}

export default React.memo(Home)