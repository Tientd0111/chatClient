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
import PeerService from '../../constants/Peer'
import ModalTest from '@/components/modal/ModalTest.jsx'

const Home = () => {
   // const PeerService = new peer
   const msgRef = useRef()
   const call = useRef()
   const incomingCall = useRef()
   const ongoingCall = useRef()
   // const {peer,createOffer,createAnswere,setRemoteAns,sendStream,remoteStream} = usePeerContext()
   // console.log("m",remoteStream)

   // const {peer,getAnswer,getOffer,setLocalDescription} = PeerService()

   const [listMessage, setListMessage] = useState()
   const [callFrom, setCallFrom] = useState()
   const [id, setId] = useState()
   const [listImage, setListImage] = useState()
   const [myStream, setMyStream] = useState(null)
   const [infoCall, setInfoCall] = useState()
   const [remoteStream, setRemoteStream] = useState(null)
   const [mute, setMute] = useState(false)

   const idUser = JSON.parse(localStorage?.getItem('user'))._id

   const {
      getMyConversation,
      listConversation,
      getConversationById,
      infoConversation,
   } = useConversationStore(state => ({
      getMyConversation: state.getMyConversation,
      listConversation: state.listConversation,
      getConversationById: state.getMyConversationById,
      infoConversation: state.infoConversation,
   }))

   const { getListMessage, getListImage } = useMessageStore(state => ({
      getListMessage: state.getListMessage,
      getListImage: state.getListImage,
   }))

   const { socket } = useSocket(state => ({
      socket: state.socket,
   }))

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
         console.log('x', data)
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


   useEffect(() => {
      if (!id) {
         setId(listConversation?.[0]?._id)
         getListImage(listConversation?.[0]?._id).then(res => {
            setListImage(res?.list_image)
         })
      } else {
         funcGetConversationById(id)
         getMessage(id)
         socket.emit('join', id)
         getListImage(id).then(res => {
            setListImage(res?.list_image)
         })
      }
   }, [id, listConversation])


   const chooseConversation = (id) => {
      setId(id)
      getMessage(id)
      funcGetConversationById(id)
      socket.emit('join', id)
      getListImage(id).then(res => {
         setListImage(res?.list_image)
      })
   }

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
   }

   const acceptCall = async () => {
      const ans = await PeerService.getAnswer(infoCall.offer)
      socket.emit('call-accepted', { conversation_id: id, ans: ans })
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
            incomingCall?.current?.close()
            ongoingCall?.current?.open()
         }
         sendStreams()
      },
      [sendStreams],
   )

   const handleNegoNeeded = async () => {
      const offer = await PeerService.getOffer()
      socket.emit('needed', { offer: offer, conversation_id: id, call_form: idUser })
   }

   useEffect(() => {
      PeerService.peer.addEventListener('negotiationneeded', handleNegoNeeded)
      return () => {
         PeerService.peer.removeEventListener('negotiationneeded', handleNegoNeeded)
      }
   }, [handleNegoNeeded])

   const handleNegoNeedIncomming = async ({ from, offer }) => {
      const ans = await PeerService.getAnswer(offer)
      socket.emit('done', { conversation_id: id, call_form: idUser, offer: ans })
   }

   const handleNegoNeedFinal = useCallback(async ({ ans }) => {
      await PeerService.setLocalDescription(ans)
   }, [])

   useEffect(() => {
      PeerService.peer.addEventListener('track', async (ev) => {
         const remoteStream = ev.streams
         console.log('GOT TRACKS!!')
         setRemoteStream(remoteStream[0])

      })
   }, [])

   useEffect(() => {
      socket.on('incoming-call', handleIncommingCall)
      socket.on('accepted', handleCallAccepted)
      socket.on('needed', handleNegoNeedIncomming)
      socket.on('final', handleNegoNeedFinal)

      return () => {
         socket.off('incoming-call', handleIncommingCall)
         socket.off('accepted', handleCallAccepted)
         socket.off('needed', handleNegoNeedIncomming)
         socket.off('final', handleNegoNeedFinal)
      }
   }, [
      handleIncommingCall,
      handleCallAccepted,
      handleNegoNeedIncomming,
      handleNegoNeedFinal,
   ])


   // End call
   console.log(myStream)

   const endCall = async (data) => {
      for (const track of myStream.getTracks()) {
         track.stop();
      }
      setMyStream(null)
      const transceiver = PeerService.peer.getTransceivers()[0];
      transceiver.stop();
      ongoingCall?.current?.close()
      incomingCall?.current?.close()
      call?.current?.close()

   }
   const onMute = () => {
      setMute(!mute)
   }




   return (
      <LayoutMain>
         <div className='tyn-content tyn-content-full-height tyn-chat has-aside-base'>
            <SideBarChat
               listConversation={listConversation}
               idConversation={id}
               chooseConversation={chooseConversation}
            />
            <MainChat callVideo={callVideo} listImage={listImage} onTyping={onTyping}
                      infoConversation={infoConversation} listMessage={listMessage} msgRef={msgRef}
                      sendMessage={sendMessage} />
         </div>
         {/*<ModalTest sendStreams={sendStreams} myStream={myStream} remoteStream={remoteStream} ref={call}/>*/}
         <ModalCallVideo ref={call} />
         <ModalncomingCall ref={incomingCall} acceptCall={acceptCall} />
         <ModalOnGoingCall endCall={endCall} mic={mute} onMute={onMute} ref={ongoingCall} myStream={myStream} remoteStream={remoteStream} />
      </LayoutMain>
   )
}

export default React.memo(Home)