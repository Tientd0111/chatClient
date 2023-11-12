import React, { useEffect, useState } from 'react'
import useStoriesStore from '@/stores/useStoriesStore.jsx'
import environmentConfig from '@/apis/environmentConfig.jsx'
import { Progress } from 'antd'

const Stories = ({id}) => {

   const [storyAct,setStoryAct] = useState()
   const [percent, setPercent] = useState(100);

   const {getListStoryById,listStory} = useStoriesStore(state => ({
      getListStoryById: state.getListStoryById,
      listStory: state.listStory
   }))
   useEffect(()=>{
      setStoryAct()
      getListStoryById(id)
   },[id])

   useEffect(()=>{
      if(storyAct === undefined){
         setStoryAct(listStory?.[0])
      }
   },[listStory])

   useEffect(() => {
      let timer = setInterval(() => {
         if (percent < 100) {
            setPercent(percent => percent + 1);
         } else {
            clearInterval(timer);
         }
      }, 100);

      return () => clearInterval(timer);
   }, [storyAct]);

   return (
      <div className="tyn-profile-stories">
         <div className="row">
            <div className="col-lg-4 col-xl-3">
               <div className="d-flex justify-content-between pb-3">
                  <h5 className="mb-0">Stories</h5>
                  <a className="link" href="#">
                     Expires Soon
                  </a>
               </div>
            </div>
         </div>
         <div className="row flex-lg-row-reverse g-gs">
            <div className="col-lg-8 col-xl-9">
               {storyAct &&
                  <div className="tyn-stories-slider swiper swiper-slider" style={{position:'relative'}}>
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="tyn-stories-item">
                              <img
                                 src={environmentConfig.BASE_URI + storyAct?.file}
                                 className="tyn-image"
                                 alt=""
                              />
                              <div className="tyn-stories-content">
                                 <h5 className="tyn-stories-title text-white">
                                    Boating on ohio lake
                                 </h5>
                                 <p className="text-white">#boating, #ohio</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div style={{bottom:0,position:'absolute',zIndex:1,width:'100%',padding:'0 10px'}}>
                        <Progress step={1} percent={percent} showInfo={false} strokeColor={"#fff"}/>
                     </div>
                  </div>
               }
            </div>
            <div className="col-lg-4 col-xl-3">
               <div className="tyn-stories-thumb swiper swiper-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-grid swiper-grid-column swiper-css-mode swiper-thumbs">
                  <div className="swiper-wrapper" style={{display:'grid',gridTemplateColumns:"repeat(2, 2fr)"}}>
                     {listStory.map((item,index)=>(
                        <div onClick={()=>{
                           setStoryAct(item)
                           setPercent(0)
                        }} className={`swiper-slide swiper-slide-active swiper-slide-visible ${storyAct?._id === item?._id ? "swiper-slide-thumb-active":""}`} key={index}>
                           <img
                              style={{objectFit:'cover',height:'128px'}}
                              src={environmentConfig.BASE_URI + item?.file}
                              className="tyn-image"
                              alt=""
                           />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default React.memo(Stories)