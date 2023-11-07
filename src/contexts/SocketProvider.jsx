import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";
import environmentConfig from '@/apis/environmentConfig.jsx'

const SocketContext = createContext(null);

export const useSocket = () => {
   const socket = useContext(SocketContext);
   return socket;
};

export const SocketProvider = (props) => {
   const socket = useMemo(() => io(environmentConfig.URI_SOCKET), []);

   return (
      <SocketContext.Provider value={socket}>
         {props.children}
      </SocketContext.Provider>
   );
};
