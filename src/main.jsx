import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'react-photo-view/dist/react-photo-view.css'
import { ContextProvider } from '@/contexts/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ContextProvider>
         <App />
      </ContextProvider>
   </React.StrictMode>
)
