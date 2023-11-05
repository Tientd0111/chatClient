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
import PeerService from '../../constants/Peer';

const Home = () => {
   // const PeerService = new peer
   const msgRef = useRef()
   const call = useRef()
   const incomingCall = useRef()
   const ongoingCall = useRef()
   // const {peer,createOffer,createAnswere,setRemoteAns,sendStream,remoteStream} = usePeerContext()
   // console.log("m",remoteStream)

   // const {peer,getAnswer,getOffer,setLocalDescription} = PeerService()

   const [listMessage,setListMessage] = useState()
   const [callFrom,setCallFrom] = useState()
   const [id,setId] = useState()
   const [listImage,setListImage] = useState()
   const [myStream,setMyStream] = useState(null)
   const [infoCall,setInfoCall] = useState()
   const [remoteStream,setRemoteStream] = useState(null)

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

   //callback socket
   const handleNegoNeedIncomming = useCallback(async (data) => {
         const ans = await PeerService.getAnswer(data?.offer);
         socket.emit("done", {ans: ans});
      },
      [socket]
   );

   const handleNegoNeedFinal = useCallback(async ({ ans }) => {
      await PeerService.setLocalDescription(ans);
   }, []);

   //

   // stream
   const sendStreams = useCallback(() => {
      for (const track of myStream.getTracks()) {
         PeerService.peer.addTrack(track, myStream);
      }
   }, [myStream]);


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

      socket.on("incoming-call", async (data) => {
         setInfoCall(data)
         const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
         });
         console.log(stream)
         setMyStream(stream);
         ongoingCall?.current?.open()
         const ans = await PeerService.getAnswer(data?.offer);
         socket.emit("call-accepted",{call_from: data?.from,ans: ans})
      })


      socket.on("needed",handleNegoNeedIncomming)

      socket.on("final", handleNegoNeedFinal)
      return () => socket.off();
   },[])

   const handleCallAccepted = useCallback(async (data) => {
         const {ans} = data
         await PeerService.setLocalDescriptionCall(ans);
         // await setRemoteAns(ans)
         // await getUserMediaStream()
         if(ans){
            call?.current?.close()
            incomingCall?.current?.close()
            ongoingCall?.current?.open()
         }
         sendStreams()

      }, [sendStreams]);


   useEffect(()=>{
      socket.on("accepted",handleCallAccepted)
      return ()=> socket.off()
   },[myStream])

   const sendMessage = (data) => {
      const dataChat = {
         sender: idUser,
         content: data.content,
         conversation_id: id,
         message_image: data?.message_image?.files?.length > 0 ? data.message_image.files: []
      }
      socket.emit("send-message",dataChat)
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

   // gọi
   const callVideo = async (data) => {
      call?.current?.open()
      const offer = await PeerService.getOffer();
      setInfoCall(data)
      const body = {
         arrive: data.arrive,
         call_from: data.call_from,
         offer: offer
      }
      socket.emit("call-video",body)
      const stream = await navigator.mediaDevices.getUserMedia({
         audio: true,
         video: true,
      });
      setMyStream(stream);
   }

   const acceptCall = async (data) => {
      const ans = await PeerService.getAnswer(infoCall?.offer);
      // socket.emit("call:accepted", { to: from, ans });
      // const ans = await createAnswere(callFrom?.offer)
      socket.emit("call-accepted",{call_from: infoCall?.from,ans: ans})
   }
   const endCall = (data) => {
      call?.current?.close()
   }


   // mới
   console.log("info",infoCall)
   const handleNegoNeeded = useCallback(async () => {
      const offer = await PeerService.getOffer();
      socket.emit("needed", { offer: offer, to: infoCall.arrive });
   }, [infoCall, socket]);

   useEffect(() => {
      if(PeerService.peer){
         PeerService.peer.addEventListener("negotiationneeded", handleNegoNeeded);
         return () => {
            PeerService.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
         };
      }
   }, [handleNegoNeeded]);


   useEffect(() => {
      PeerService.peer.addEventListener('track', async (ev) => {
         const remoteStream = ev.streams;
         console.log('GOT TRACKS!!');
         setRemoteStream(remoteStream[0]);
      });
   }, []);

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
         <ModalOnGoingCall ref={ongoingCall} myStream={myStream} remoteStream={remoteStream}/>
      </LayoutMain>
   )
}

export default Home