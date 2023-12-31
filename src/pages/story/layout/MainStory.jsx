import React, { useEffect, useState } from 'react'
import environmentConfig from '@/apis/environmentConfig.jsx'

const MainStory = ({ listStoryChild,next,user }) => {
   // const [storyAct,setStoryAct] = useState()
   // useEffect(()=>{
   //    setStoryAct(listStoryChild?.[0])
   // },[listStoryChild])
   //
   // const [timeoutId, setTimeoutId] = useState(null);
   //
   // useEffect(() => {
   //    const time = setTimeout(() => {
   //       const nextIndex = listStoryChild?.findIndex(item => item === storyAct) + 1;
   //       if (!listStoryChild || nextIndex < 0 || nextIndex >= listStoryChild.length) {
   //          clearTimeout(timeoutId);
   //          next();
   //       } else {
   //          setStoryAct(listStoryChild[nextIndex]);
   //       }
   //    }, 5000);
   //    setTimeoutId(time);
   // }, [storyAct]);
   //
   // useEffect(() => {
   //    return () => {
   //       clearTimeout(timeoutId);
   //    };
   // }, [timeoutId]);
   const [storyAct, setStoryAct] = useState(listStoryChild?.[0]);

   useEffect(() => {
      const time = setTimeout(() => {
         const nextIndex = listStoryChild?.findIndex(item => item === storyAct) + 1;
         if (!listStoryChild || nextIndex < 0 || nextIndex >= listStoryChild.length) {
            clearTimeout(time);
            next();
         } else {
            setStoryAct(listStoryChild[nextIndex]);
         }
      }, 5000);
      return () => clearTimeout(time);
   }, [storyAct]);

   useEffect(() => {
      setStoryAct(listStoryChild?.[0]);
   }, [listStoryChild]);
   return (
      <div className='tyn-content-inner d-flex align-items-center'>
         <div className='tyn-stories-wrap'>
            <div className='tyn-stories-slider swiper swiper-slider' style={{ borderRadius: '0.375rem' }}>
               <div className='swiper-wrapper' >
                  <div className='swiper-slide' style={{ width: '540px', height: '610px' }}>
                     <div className='tyn-stories-item'>
                        <img style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                             src={environmentConfig.BASE_URI + storyAct?.file} className='tyn-image' alt='' />
                        <div className='tyn-stories-content'>
                           <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                              <img style={{objectFit:'cover',width:'40px',height:'40px',borderRadius:'50%',padding:'2px',border:"1px solid #fff"}} src={environmentConfig.BASE_URI + user?.avatar} alt='' />
                              <h6 style={{color:"#fff"}}>{user?.name}</h6>
                           </div>
                           {/*<h5 className='tyn-stories-title text-white'>*/}
                           {/*   Boating on ohio lake*/}
                           {/*</h5>*/}
                           {/*<p className='text-white'>#boating, #ohio</p>*/}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* .tyn-stories-slider */}
         </div>
         {/* .tyn-stories-wrap */}
      </div>

   )
}

export default React.memo(MainStory)