import React from 'react'
import environmentConfig from '@/apis/environmentConfig.jsx'

const MainStory = ({storyAct}) => {
   return (
      <div className="tyn-content-inner d-flex align-items-center">
         <div className="tyn-stories-wrap">
            <div className="tyn-stories-slider swiper swiper-slider" style={{borderRadius:'0.375rem'}}>
               <div className="swiper-wrapper">
                  <div className="swiper-slide" style={{width:"540px",height:'625px'}}>
                     <div className="tyn-stories-item">
                        <img style={{objectFit:'cover',borderRadius:"0.375rem"}} src={environmentConfig.BASE_URI + storyAct?.stories?.[0]?.file} className="tyn-image" alt="" />
                        <div className="tyn-stories-content">
                           <h5 className="tyn-stories-title text-white">
                              Boating on ohio lake
                           </h5>
                           <p className="text-white">#boating, #ohio</p>
                        </div>
                     </div>
                  </div>
                  {/* .swiper-slide */}
               </div>
            </div>
            {/* .tyn-stories-slider */}
         </div>
         {/* .tyn-stories-wrap */}
      </div>

   )
}

export default MainStory