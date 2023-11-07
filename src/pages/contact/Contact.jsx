import React, { useEffect, useState } from 'react'
import LayoutMain from '@/Layout/LayoutMain.jsx'
import SideBarContact from '@/pages/contact/layout/SideBarContact.jsx'
import MainContact from '@/pages/contact/layout/MainContact.jsx'
import useFriendStore from '@/stores/useFriendStore.jsx'

const Contact = () => {
   const [id,setId] = useState()
   const [info,setInfo] = useState()
   const [showInfo,setShowInfo] = useState(false)

   const {getListFriend,listFriend,getById} = useFriendStore(state => ({
      getListFriend: state.getListFriend,
      listFriend: state.listFriend,
      getById: state.getById
   }))

   async function fetchData(){
      await getListFriend()
   }

   async function getInfoFriend(){
      getById(id).then(res => {
         setInfo(res)
      })
   }
   useEffect(()=>{
      if(id){
        getInfoFriend()
      }
   },[id])

   useEffect(()=>{
      fetchData()
   },[])

   useEffect(()=>{
      if(!id){
         setId(listFriend?.[0]?._id)
      }
   },[listFriend])

   const chooseFriend = (id) => {
      setShowInfo(true)
      setId(id)
      getById(id).then(res => {
         setInfo(res)
      })
   }
   const hideInfo = () => {
      setShowInfo(false)
   }
   return (
      <LayoutMain>
         <div className={"tyn-content tyn-contact  has-aside-base"}>
            <SideBarContact listFriend={listFriend} id={id} chooseFriend={chooseFriend}/>
            <MainContact onHideInfo={hideInfo} showInfo={showInfo} id={id} info={info}/>
         </div>
      </LayoutMain>
   )
}

export default Contact