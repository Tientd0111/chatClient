import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const PeerContext = createContext();

export const PeerProvider = ({ children }) => {
   const [remoteStream,setRemoteStream] = useState()
   const peer = useMemo(() => new RTCPeerConnection({
      iceServers: [
         {
            urls: [
               "stun:stun.l.google.com:19302",
               "stun:global.stun.twilio.com:3478",
            ]
         }
      ]
   }));
   
   const createOffer = async () => {
      const offer = await peer.createOffer()
      await peer.setLocalDescription(offer)
      return offer
   }

   const createAnswere = async (offer) => {
      await peer.setRemoteDescription(offer);
      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);
      return answer;
   }

   const setRemoteAns = async (ans) => {
      if (peer.connectionState === 'connected') {
         peer.setRemoteDescription(ans);
      } else {
         peer.addEventListener('connectionstatechange', event => {
            if (peer.connectionState === 'connected') {
               peer.setRemoteDescription(ans);
            }
         });
      }
      // await peer.setRemoteDescription(ans)
   }

   const sendStream = async (stream) => {
      console.log(stream)
      const tracks = stream.getTracks()
      for (const track of tracks){
         peer.addTrack(track,stream)
      }
   }
   const handleTrackEvent = useCallback((ev)=>{
      console.log("ev",ev)
      const streams = ev.streams
      setRemoteStream(streams[0])
   },[])

   useEffect(()=>{
      peer.addEventListener("track", handleTrackEvent)
      return () => {
         peer.removeEventListener("track",handleTrackEvent)
      }
   },[peer,handleTrackEvent])
   return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <PeerContext.Provider
         value={{
            peer,
            createOffer,
            createAnswere,
            setRemoteAns,
            sendStream,
            remoteStream
         }}
      >
         {children}
      </PeerContext.Provider>
   );
};

export const usePeerContext = () => useContext(PeerContext);


