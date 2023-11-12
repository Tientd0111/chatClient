import React, { useEffect, useState } from 'react'
import LayoutMain from '@/Layout/LayoutMain.jsx'
import SideBarStory from '@/pages/story/layout/SideBarStory.jsx'
import MainStory from '@/pages/story/layout/MainStory.jsx'
import useStoriesStore from '@/stores/useStoriesStore.jsx'

const Story = () => {
   const [storyAct,setStoryAct] = useState()
   const {getNewStoryAll,listStoryNew} = useStoriesStore(state => ({
      getNewStoryAll: state.getNewStoryAll,
      listStoryNew: state.listStoryNew
   }))
   useEffect(()=>{
      getNewStoryAll()
   },[])

   useEffect(()=>{
      if(storyAct === undefined){
         setStoryAct(listStoryNew?.[0])
      }
   },[listStoryNew])

   const handleChoose = (data) => {
      setStoryAct(data)
   }

   return (
      <LayoutMain>
         <div className={"tyn-content tyn-stories tyn-stories-page has-aside-sticky"}>
            <SideBarStory storyAct={storyAct} listStoryNew={listStoryNew} handleChoose={handleChoose}/>
            <MainStory storyAct={storyAct}/>
         </div>
      </LayoutMain>
   )
}

export default Story