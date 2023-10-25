import React, { useEffect, useState } from 'react'
import LayoutMain from '@/Layout/LayoutMain'
import SideBarChat from '@/pages/chat/layout/SideBarChat.jsx'
import MainChat from '@/pages/chat/layout/MainChat.jsx'
import useConversationStore from '@/stores/useConversationStore.jsx'

const Home = () => {

   const {getMyConversation,listConversation} = useConversationStore(state => ({
      getMyConversation: state.getMyConversation,
      listConversation: state.listConversation
   }))

   const [id,setId] = useState()

   useEffect(()=>{
      setId(listConversation?.[0]?._id)
   },[listConversation])

   async function fetchData(){
      await getMyConversation("6535d27eee0919d8f975b58a")
   }

   useEffect(()=>{
      fetchData()
   },[])

   const chooseConversation = (id) => {
      setId(id)
   }


   return (
      <LayoutMain>
         <div className="tyn-content tyn-content-full-height tyn-chat has-aside-base">
            <SideBarChat
               listConversation={listConversation}
               idConversation={id}
               chooseConversation={chooseConversation}
            />
            <MainChat idConversation={id}/>
         </div>
      </LayoutMain>
   )
}

export default Home