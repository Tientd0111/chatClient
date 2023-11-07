import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'react-photo-view/dist/react-photo-view.css'
import { ContextProvider } from '@/contexts/ContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from '@/contexts/SocketProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ContextProvider>
         <BrowserRouter>
            <SocketProvider>
               <App />
            </SocketProvider>
         </BrowserRouter>
         {/*<PeerProvider>*/}
         {/*</PeerProvider>*/}
      </ContextProvider>
   </React.StrictMode>
)
