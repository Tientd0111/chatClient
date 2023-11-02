import React, { createContext, useContext, useMemo, useState } from 'react'

const PeerContext = createContext();

export const PeerProvider = ({ children }) => {
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

   return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <PeerContext.Provider
         value={{
            peer,
            createOffer
         }}
      >
         {children}
      </PeerContext.Provider>
   );
};

export const usePeerContext = () => useContext(PeerContext);


