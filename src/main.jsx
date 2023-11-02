import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'react-photo-view/dist/react-photo-view.css'
import { ContextProvider } from '@/contexts/ContextProvider.jsx'
import { PeerProvider } from '@/contexts/Peer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ContextProvider>
         <PeerProvider>
            <App />
         </PeerProvider>
      </ContextProvider>
   </React.StrictMode>
)
