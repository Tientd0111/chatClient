import React, { useEffect, useState } from 'react'
import environmentConfig from '@/apis/environmentConfig.jsx'

const SideBarStory = ({listStoryNew,handleChoose,storyAct}) => {
   useEffect(() => {
      const time = setTimeout(() => {
         const nextIndex = listStoryNew.findIndex(item => item === storyAct) + 1;
         if(nextIndex >= listStoryNew.length){
            clearTimeout(time)
         }else {
            handleChoose(listStoryNew[nextIndex])
         }
      }, 5000);
   }, [storyAct]);

   return (
      <div className="tyn-aside tyn-aside-sticky" style={{height:"calc(100vh - 73px)"}}>
         <div className="tyn-aside-head">
            <div className="tyn-aside-head-text">
               <h3 className="tyn-aside-title tyn-title">Stories</h3>
               <span className="tyn-subtext">12 Unseen stories</span>
            </div>
            <div className="tyn-aside-head-tools">
               <ul className="tyn-list-inline gap gap-3">
                  <li>
                     <button className="btn btn-icon btn-light btn-md btn-pill">
                        {/* plus-lg */}
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width={16}
                           height={16}
                           fill="currentColor"
                           className="bi bi-plus-lg"
                           viewBox="0 0 16 16"
                        >
                           <path
                              fillRule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                           />
                        </svg>
                     </button>
                  </li>
               </ul>
            </div>
         </div>
         {/* .tyn-aside-head */}
         <div className="tyn-aside-body" data-simplebar="">
            <div className="tyn-aside-row pt-0">
               <div className="tyn-stories-thumb swiper swiper-slider">
                  <div className="swiper-wrapper" style={{display:'grid',gridTemplateColumns:"repeat(2, 2fr)"}}>
                     {listStoryNew.map((item)=>(
                        <div className={`swiper-slide swiper-slide-visible ${item?._id === storyAct?._id ? "swiper-slide-thumb-active":""}`} key={item?._id} onClick={()=>handleChoose(item)}>
                           <img
                              src={environmentConfig.BASE_URI + item?.stories?.[0]?.file}
                              className="tyn-image"
                              alt=""
                              style={{height:'100%',objectFit:'cover'}}
                           />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            {/* .tyn-stories-thumb */}
         </div>
         {/* .tyn-aside-body */}
      </div>

   )
}

export default SideBarStory