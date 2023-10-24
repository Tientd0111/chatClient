import React, { useState } from 'react'
import { Tabs } from 'antd'
import environmentConfig from '@/apis/environmentConfig.jsx'

const InfoChat = ({ showInfo ,infoConversation}) => {
   const id = "6535d27eee0919d8f975b58a"
   const [tabAct,setTabAct] = useState("media")

   const handleTab = (tab) => {
      setTabAct(tab)
   }
   return (
      <div className={`tyn-chat-content-aside ${showInfo ? 'show-aside' : ''}`} id='tynChatAside'>
         <div className='tyn-chat-cover'>
            <img src={
               infoConversation?.user_1?._id === id ?
                  (environmentConfig.BASE_URI + infoConversation?.user_2?.cover) : (environmentConfig.BASE_URI + infoConversation?.user_1?.cover)
            } alt="" />
         </div>
         <div className='tyn-media-group tyn-media-vr tyn-media-center mt-n4'>
            <div className='tyn-media tyn-size-xl border border-2 border-white'>
               <img src={
                  infoConversation?.user_1?._id === id ?
                     (environmentConfig.BASE_URI + infoConversation?.user_2?.avatar) : (environmentConfig.BASE_URI + infoConversation?.user_1?.avatar)
               } alt="" />
            </div>
            <div className='tyn-media-col'>
               <div className='tyn-media-row'>
                  <h6 className='name'>{infoConversation?.user_1?._id === id ? infoConversation?.user_2?.name : infoConversation?.user_1?.name}</h6>
               </div>
               <div className='tyn-media-row has-dot-sap'>
                  <span className='meta'>Active Now</span>
               </div>
            </div>
         </div>
         <div className='tyn-aside-row'>
            <ul className='nav nav-btns nav-btns-stretch nav-btns-light'>
               <li className='nav-item'>
                  <button
                     className='nav-link js-chat-mute-toggle tyn-chat-mute'
                     type='button'
                  >
                     <span className='icon unmuted-icon'>
                        {/* bell-fill */}
                         <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={16}
                            height={16}
                            fill='currentColor'
                            className='bi bi-bell-fill'
                            viewBox='0 0 16 16'
                         >
                           <path
                              d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z' />
                        </svg>
                     </span>
                     <span className='unmuted-icon'>Mute</span>
                     <span className='icon muted-icon'>
            {/* bell-slash-fill */}
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           width={16}
                           height={16}
                           fill='currentColor'
                           className='bi bi-bell-slash-fill'
                           viewBox='0 0 16 16'
                        >
              <path
                 d='M5.164 14H15c-1.5-1-2-5.902-2-7 0-.264-.02-.523-.06-.776L5.164 14zm6.288-10.617A4.988 4.988 0 0 0 8.995 2.1a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 7c0 .898-.335 4.342-1.278 6.113l9.73-9.73zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z' />
            </svg>
          </span>
                     <span className='muted-icon'>Muted</span>
                  </button>
               </li>
               <li onClick={()=>handleTab("media")} className='nav-item'>
                  <button
                     className={`nav-link ${tabAct === "media" ? "active":""}`}
                     data-bs-toggle='tab'
                     data-bs-target='#chat-media'
                     type='button'
                  >
                     {/* images */}
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        fill='currentColor'
                        className='bi bi-images'
                        viewBox='0 0 16 16'
                     >
                        <path d='M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
                        <path
                           d='M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z' />
                     </svg>
                     <span>Media</span>
                  </button>
               </li>
               <li onClick={()=>handleTab("option")} className='nav-item'>
                  <button
                     className={`nav-link ${tabAct === "option" ? "active":""}`}
                     data-bs-toggle='tab'
                     data-bs-target='#chat-options'
                     type='button'
                  >
                     {/* sliders */}
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        fill='currentColor'
                        className='bi bi-sliders'
                        viewBox='0 0 16 16'
                     >
                        <path
                           fillRule='evenodd'
                           d='M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z'
                        />
                     </svg>
                     <span>Options</span>
                  </button>
               </li>
            </ul>
         </div>
         <div className='tab-content'>
            <div className={`tab-pane ${tabAct === "media" ? "show active" : ""}`} id='chat-media' tabIndex={0}>
               <Tabs defaultActiveKey={1} className='tyn-aside-row py-0'>
                  <Tabs.TabPane tab={"Images"} key={1} >
                     <div
                        className='tab-pane'
                        id='chat-media-images'
                     >
                        <div className='row g-3'>
                           <div className='col-4'>
                              <a
                                 href='../../../src/assets/images/gallery/chat/1.jpg'
                                 className='glightbox tyn-thumb'
                                 data-gallery='media-photo'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/chat/thumb-1.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                              </a>
                           </div>
                           <div className='col-4'>
                              <a
                                 href='../../../src/assets/images/gallery/chat/2.jpg'
                                 className='glightbox tyn-thumb'
                                 data-gallery='media-photo'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/chat/thumb-2.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                              </a>
                           </div>
                           <div className='col-4'>
                              <a
                                 href='../../../src/assets/images/gallery/chat/3.jpg'
                                 className='glightbox tyn-thumb'
                                 data-gallery='media-photo'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/chat/thumb-3.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                              </a>
                           </div>
                           <div className='col-4'>
                              <a
                                 href='../../../src/assets/images/gallery/chat/4.jpg'
                                 className='glightbox tyn-thumb'
                                 data-gallery='media-photo'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/chat/thumb-4.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                              </a>
                           </div>
                           <div className='col-4'>
                              <a
                                 href='../../../src/assets/images/gallery/chat/5.jpg'
                                 className='glightbox tyn-thumb'
                                 data-gallery='media-photo'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/chat/thumb-5.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                              </a>
                           </div>
                           <div className='col-4'>
                              <a
                                 href='../../../src/assets/images/gallery/chat/6.jpg'
                                 className='glightbox tyn-thumb'
                                 data-gallery='media-photo'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/chat/thumb-6.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                              </a>
                           </div>
                        </div>
                     </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab={"Videos"} key={2}>
                     <div className='tab-pane' id='chat-media-videos'>
                        <div className='row g-3'>
                           <div className='col-6'>
                              <a
                                 href='https://www.youtube.com/watch?v=ag0qTaAKqT8'
                                 className='glightbox tyn-video'
                                 data-gallery='media-video'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/video/hr-1.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                                 <div className='tyn-video-icon'>
                                    {/* play-fill */}
                                    <svg
                                       xmlns='http://www.w3.org/2000/svg'
                                       width={16}
                                       height={16}
                                       fill='currentColor'
                                       className='bi bi-play-fill'
                                       viewBox='0 0 16 16'
                                    >
                                       <path
                                          d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
                                    </svg>
                                 </div>
                              </a>
                           </div>
                           <div className='col-6'>
                              <a
                                 href='https://www.youtube.com/watch?v=ag0qTaAKqT8'
                                 className='glightbox tyn-video'
                                 data-gallery='media-video'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/video/hr-2.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                                 <div className='tyn-video-icon'>
                                    {/* play-fill */}
                                    <svg
                                       xmlns='http://www.w3.org/2000/svg'
                                       width={16}
                                       height={16}
                                       fill='currentColor'
                                       className='bi bi-play-fill'
                                       viewBox='0 0 16 16'
                                    >
                                       <path
                                          d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
                                    </svg>
                                 </div>
                              </a>
                           </div>
                           <div className='col-6'>
                              <a
                                 href='https://www.youtube.com/watch?v=ag0qTaAKqT8'
                                 className='glightbox tyn-video'
                                 data-gallery='media-video'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/video/hr-3.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                                 <div className='tyn-video-icon'>
                                    {/* play-fill */}
                                    <svg
                                       xmlns='http://www.w3.org/2000/svg'
                                       width={16}
                                       height={16}
                                       fill='currentColor'
                                       className='bi bi-play-fill'
                                       viewBox='0 0 16 16'
                                    >
                                       <path
                                          d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
                                    </svg>
                                 </div>
                              </a>
                           </div>
                           <div className='col-6'>
                              <a
                                 href='https://www.youtube.com/watch?v=ag0qTaAKqT8'
                                 className='glightbox tyn-video'
                                 data-gallery='media-video'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/video/hr-4.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                                 <div className='tyn-video-icon'>
                                    {/* play-fill */}
                                    <svg
                                       xmlns='http://www.w3.org/2000/svg'
                                       width={16}
                                       height={16}
                                       fill='currentColor'
                                       className='bi bi-play-fill'
                                       viewBox='0 0 16 16'
                                    >
                                       <path
                                          d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
                                    </svg>
                                 </div>
                              </a>
                           </div>
                           <div className='col-6'>
                              <a
                                 href='https://www.youtube.com/watch?v=ag0qTaAKqT8'
                                 className='glightbox tyn-video'
                                 data-gallery='media-video'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/video/vr-5.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                                 <div className='tyn-video-icon'>
                                    {/* play-fill */}
                                    <svg
                                       xmlns='http://www.w3.org/2000/svg'
                                       width={16}
                                       height={16}
                                       fill='currentColor'
                                       className='bi bi-play-fill'
                                       viewBox='0 0 16 16'
                                    >
                                       <path
                                          d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
                                    </svg>
                                 </div>
                              </a>
                           </div>
                           <div className='col-6'>
                              <a
                                 href='https://www.youtube.com/watch?v=ag0qTaAKqT8'
                                 className='glightbox tyn-video'
                                 data-gallery='media-video'
                              >
                                 <img
                                    src='../../../src/assets/images/gallery/video/hr-6.jpg'
                                    className='tyn-image'
                                    alt=''
                                 />
                                 <div className='tyn-video-icon'>
                                    {/* play-fill */}
                                    <svg
                                       xmlns='http://www.w3.org/2000/svg'
                                       width={16}
                                       height={16}
                                       fill='currentColor'
                                       className='bi bi-play-fill'
                                       viewBox='0 0 16 16'
                                    >
                                       <path
                                          d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
                                    </svg>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab={"Files"} key={3}></Tabs.TabPane>
                  <Tabs.TabPane tab={"Links"} key={4}></Tabs.TabPane>
               </Tabs>

            </div>
            {/* .tab-pane */}
            <div className={`tab-pane ${tabAct === "option" ? "show active":""}`} id='chat-options' tabIndex={0}>
               <div className='tyn-aside-row py-0'>
                  <ul className='nav nav-tabs nav-tabs-line'>
                     <li className='nav-item'>
                        <button
                           className='nav-link active'
                           data-bs-toggle='tab'
                           data-bs-target='#chat-options-customize'
                           type='button'
                        >
                           Customize{' '}
                        </button>
                     </li>
                     <li className='nav-item'>
                        <button
                           className='nav-link'
                           data-bs-toggle='tab'
                           data-bs-target='#chat-options-manage'
                           type='button'
                        >
                           Manage{' '}
                        </button>
                     </li>
                  </ul>
               </div>
               <div className='tyn-aside-row'>
                  <div className='tab-content'>
                     <div
                        className='tab-pane show active'
                        id='chat-options-customize'
                        tabIndex={0}
                     >
                        <ul className='d-flex flex-column gap gap-4'>
                           <li>
                              <h6 className='tyn-title-overline'>Change Theme</h6>
                              <ul className='tyn-chat-theme-list'>
                                 <li>
                                    <button className='tyn-chat-theme-btn' data-theme='blue' />
                                 </li>
                                 <li>
                                    <button
                                       className='tyn-chat-theme-btn'
                                       data-theme='indigo'
                                    />
                                 </li>
                                 <li>
                                    <button className='tyn-chat-theme-btn' data-theme='green' />
                                 </li>
                                 <li>
                                    <button className='tyn-chat-theme-btn' data-theme='red' />
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <h6 className='tyn-title-overline'>Change Background</h6>
                              <div className='row g-3'>
                                 <div className='col-4'>
                                    <button className='tyn-thumb'>
                                       <img
                                          src='../../../src/assets/images/gallery/chat/thumb-1.jpg'
                                          className='tyn-image'
                                          alt=''
                                       />
                                    </button>
                                 </div>
                                 <div className='col-4'>
                                    <button className='tyn-thumb'>
                                       <img
                                          src='../../../src/assets/images/gallery/chat/thumb-2.jpg'
                                          className='tyn-image'
                                          alt=''
                                       />
                                    </button>
                                 </div>
                                 <div className='col-4'>
                                    <button className='tyn-thumb'>
                                       <img
                                          src='../../../src/assets/images/gallery/chat/thumb-3.jpg'
                                          className='tyn-image'
                                          alt=''
                                       />
                                    </button>
                                 </div>
                                 <div className='col-4'>
                                    <button className='tyn-thumb'>
                                       <img
                                          src='../../../src/assets/images/gallery/chat/thumb-4.jpg'
                                          className='tyn-image'
                                          alt=''
                                       />
                                    </button>
                                 </div>
                                 <div className='col-4'>
                                    <button className='tyn-thumb'>
                                       <img
                                          src='../../../src/assets/images/gallery/chat/thumb-5.jpg'
                                          className='tyn-image'
                                          alt=''
                                       />
                                    </button>
                                 </div>
                                 <div className='col-4'>
                                    <button className='tyn-thumb'>
                                       <img
                                          src='../../../src/assets/images/gallery/chat/thumb-6.jpg'
                                          className='tyn-image'
                                          alt=''
                                       />
                                    </button>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <h6 className='tyn-title-overline'>Edit Nicknames</h6>
                              <ul className='tyn-media-list gap gap-3'>
                                 <li>
                                    <div className='tyn-media-group'>
                                       <div className='tyn-media tyn-size-lg'>
                                          <img src='../../../src/assets/images/avatar/1.jpg' alt='' />
                                       </div>
                                       <div className='tyn-media-col'>
                                          <div className='tyn-media-row'>
                                             <h6 className='name'>Jasmine Thompson</h6>
                                          </div>
                                          <div className='tyn-media-row has-dot-sap'>
                                             <span className='meta'>og : Jasmine</span>
                                          </div>
                                       </div>
                                       <div className='tyn-media-option'>
                                          <ul className='tyn-media-option-list'>
                                             <li>
                                                <button className='btn btn-icon btn-md btn-pill btn-light'>
                                                   {/* pencil-square */}
                                                   <svg
                                                      xmlns='http://www.w3.org/2000/svg'
                                                      width={16}
                                                      height={16}
                                                      fill='currentColor'
                                                      className='bi bi-pencil-square'
                                                      viewBox='0 0 16 16'
                                                   >
                                                      <path
                                                         d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                                                      <path
                                                         fillRule='evenodd'
                                                         d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
                                                      />
                                                   </svg>
                                                </button>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 <li>
                                    <div className='tyn-media-group'>
                                       <div className='tyn-media tyn-size-lg'>
                                          <img src='../../../src/assets/images/avatar/3.jpg' alt='' />
                                       </div>
                                       <div className='tyn-media-col'>
                                          <div className='tyn-media-row'>
                                             <h6 className='name'>Konstantin Frank</h6>
                                          </div>
                                          <div className='tyn-media-row has-dot-sap'>
                                             <span className='meta'>og : konstatin nk</span>
                                          </div>
                                       </div>
                                       <div className='tyn-media-option'>
                                          <ul className='tyn-media-option-list'>
                                             <li>
                                                <button className='btn btn-icon btn-md btn-pill btn-light'>
                                                   {/* pencil-square */}
                                                   <svg
                                                      xmlns='http://www.w3.org/2000/svg'
                                                      width={16}
                                                      height={16}
                                                      fill='currentColor'
                                                      className='bi bi-pencil-square'
                                                      viewBox='0 0 16 16'
                                                   >
                                                      <path
                                                         d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                                                      <path
                                                         fillRule='evenodd'
                                                         d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
                                                      />
                                                   </svg>
                                                </button>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                     {/* .tab-pane */}
                     <div className='tab-pane' id='chat-options-manage' tabIndex={0}>
                        <ul className='tyn-media-list gap gap-3'>
                           <li>
                              <a href='#' className='tyn-file'>
                                 <div className='tyn-media-group'>
                                    <div className='tyn-media text-bg-light'>
                                       {/* person-x-fill */}
                                       <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          width={16}
                                          height={16}
                                          fill='currentColor'
                                          className='bi bi-person-x-fill'
                                          viewBox='0 0 16 16'
                                       >
                                          <path
                                             fillRule='evenodd'
                                             d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z'
                                          />
                                       </svg>
                                    </div>
                                    <div className='tyn-media-col'>
                                       <h6 className='name'>Block</h6>
                                       <div className='meta'>
                                          Frank will no longer be in your contact.
                                       </div>
                                    </div>
                                 </div>
                              </a>
                           </li>
                           <li>
                              <a href='#' className='tyn-file'>
                                 <div className='tyn-media-group'>
                                    <div className='tyn-media text-bg-light'>
                                       {/* exclamation-triangle-fill */}
                                       <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          width={16}
                                          height={16}
                                          fill='currentColor'
                                          className='bi bi-exclamation-triangle-fill'
                                          viewBox='0 0 16 16'
                                       >
                                          <path
                                             d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
                                       </svg>
                                    </div>
                                    <div className='tyn-media-col'>
                                       <h6 className='name'>Report</h6>
                                       <div className='meta'>
                                          Give feedback on the conversation
                                       </div>
                                    </div>
                                 </div>
                              </a>
                           </li>
                        </ul>
                     </div>
                     {/* .tab-pane */}
                  </div>
               </div>
            </div>
            {/* .tab-pane */}
         </div>
      </div>

   )
}

export default InfoChat