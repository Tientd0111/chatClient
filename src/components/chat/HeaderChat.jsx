import React from 'react'
import environmentConfig from '@/apis/environmentConfig.jsx'

const HeaderChat = ({showInfo,onDisplayInfo,infoConversation,callVideo,onChangeShowMessage}) => {
   const id = JSON.parse(localStorage?.getItem("user"))._id
   const handleCall = () => {
      const data = {
         arrive: infoConversation?.user_1?._id === id ? infoConversation?.user_2?._id : infoConversation?.user_1?._id,
         call_from: id
      }
      callVideo(data)
   }
   return (
      <>
         <div className="tyn-chat-head">
            <ul className="tyn-list-inline d-md-none ms-n1">
               <li>
                  <button className="btn btn-icon btn-md btn-pill btn-transparent js-toggle-main" onClick={onChangeShowMessage}>
                     {/* arrow-left */}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                     >
                        <path
                           fillRule="evenodd"
                           d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                     </svg>
                  </button>
               </li>
            </ul>
            <div className="tyn-media-group">
               <div className="tyn-media tyn-size-lg d-none d-sm-inline-flex">
                  <img src={
                     infoConversation?.user_1?._id === id ?
                        (environmentConfig.BASE_URI + infoConversation?.user_2?.avatar) : (environmentConfig.BASE_URI + infoConversation?.user_1?.avatar)
                  } alt="" />
               </div>
               <div className="tyn-media tyn-size-rg d-sm-none">
                  <img src={
                     infoConversation?.user_1?._id === id ?
                        (environmentConfig.BASE_URI + infoConversation?.user_2?.avatar) : (environmentConfig.BASE_URI + infoConversation?.user_1?.avatar)
                  } alt="" />
               </div>
               <div className="tyn-media-col">
                  <div className="tyn-media-row">
                     <h6 className="name">
                        <span className="d-none d-sm-inline-block">{infoConversation?.user_1?._id === id ? infoConversation?.user_2?.name : infoConversation?.user_1?.name}</span>
                     </h6>
                  </div>
                  <div className="tyn-media-row has-dot-sap">
                     <span className="meta">Active</span>
                  </div>
               </div>
            </div>
            <ul className="tyn-list-inline gap gap-3 ms-auto">
               <li>
                  <button
                     className="btn btn-icon btn-light"
                     data-bs-toggle="modal"
                     data-bs-target="#callingScreen"
                  >
                     {/* telephone-fill */}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                     >
                        <path
                           fillRule="evenodd"
                           d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                     </svg>
                  </button>
               </li>
               <li>
                  <button
                     className="btn btn-icon btn-light"
                     data-bs-toggle="modal"
                     data-bs-target="#videoCallingScreen"
                     onClick={handleCall}
                  >
                     {/* camera-video-fill */}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-camera-video-fill"
                        viewBox="0 0 16 16"
                     >
                        <path
                           fillRule="evenodd"
                           d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                        />
                     </svg>
                  </button>
               </li>
               <li className="d-none d-sm-block">
                  <button className="btn btn-icon btn-light js-toggle-chat-search">
                     {/* search */}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                     >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                     </svg>
                  </button>
               </li>
               <li>
                  <span className={`btn btn-icon btn-light js-toggle-chat-options ${showInfo && "active"}`} onClick={()=>onDisplayInfo(!showInfo)}>
                     {/* layout-sidebar-inset-reverse */}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-layout-sidebar-inset-reverse"
                        viewBox="0 0 16 16"
                     >
                        <path d="M2 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12z" />
                        <path d="M13 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4z" />
                     </svg>
                  </span>
               </li>
            </ul>
            <div className="tyn-chat-search" id="tynChatSearch">
               <div className="flex-grow-1">
                  <div className="form-group">
                     <div className="form-control-wrap form-control-plaintext-wrap">
                        <div className="form-control-icon start">
                           {/* search */}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-search"
                              viewBox="0 0 16 16"
                           >
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                           </svg>
                        </div>
                        <input
                           type="text"
                           className="form-control form-control-plaintext"
                           id="searchInThisChat"
                           placeholder="Search in this chat"
                        />
                     </div>
                  </div>
               </div>
               <div className="d-flex align-items-center gap gap-3">
                  <ul className="tyn-list-inline ">
                     <li>
                        <button className="btn btn-icon btn-sm btn-transparent">
                           {/* chevron-up */}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-chevron-up"
                              viewBox="0 0 16 16"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                              />
                           </svg>
                        </button>
                     </li>
                     <li>
                        <button className="btn btn-icon btn-sm btn-transparent">
                           {/* chevron-down */}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                           </svg>
                        </button>
                     </li>
                  </ul>
                  <ul className="tyn-list-inline ">
                     <li>
                        <button className="btn btn-icon btn-md btn-light js-toggle-chat-search">
                           {/* x-lg */}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-x-lg"
                              viewBox="0 0 16 16"
                           >
                              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                           </svg>
                        </button>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}

export default React.memo(HeaderChat)