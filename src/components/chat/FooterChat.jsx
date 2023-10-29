import React, { useState } from 'react'
import { BsFillEmojiWinkFill, BsFillSendFill, BsImage, BsMicFill, BsPlusLg } from 'react-icons/bs'
import axios from 'axios'
import environmentConfig from '@/apis/environmentConfig.jsx'

const FooterChat = ({msgRef,onSendMessage,onTyping}) => {
   const [img,setImg] = useState()



   const onSend = (e) => {
      e.preventDefault()
      const message = msgRef.current?.value
      if(message) {
         onSendMessage({content:message,message_image: img})
      }
   }

   const useUpload = async (e) => {
      const formData = new FormData();
      for (const key of Object.keys(e.target.files)) {
         formData.append("files", e.target.files[key]);
      }
      try {
         const config = {
            headers: { 'content-type': 'multipart/form-data' }
         }
         await axios.post(environmentConfig.API_ENVIRONMENT_URL + 'upload-array', formData, config).then(res =>{
            if(res?.status === 200){
               setImg(res?.data)
               onSendMessage({message_image: img})
            }
         })
      }catch (e) {
         console.log(e)
      }
   };

   return (
      <div className="tyn-chat-form">
         <div className="tyn-chat-form-insert">
            <ul className="tyn-list-inline gap gap-3">
               <li className="dropup">
                  <button
                     className="btn btn-icon btn-light btn-md btn-pill"
                     data-bs-toggle="dropdown"
                     data-bs-offset="0,10"
                  >
                     {/* plus-lg */}
                     <BsPlusLg/>
                  </button>
                  <div className="dropdown-menu">
                     <ul className="tyn-list-links">
                        <li>
                           <a href="#">
                              {/* person-video2 */}
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={16}
                                 height={16}
                                 fill="currentColor"
                                 className="bi bi-person-video2"
                                 viewBox="0 0 16 16"
                              >
                                 <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                 <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z" />
                              </svg>
                              <span>New Group</span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              {/* mic */}
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={16}
                                 height={16}
                                 fill="currentColor"
                                 className="bi bi-mic"
                                 viewBox="0 0 16 16"
                              >
                                 <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                 <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                              </svg>
                              <span>Voice Clip</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </li>
               <li className="d-none d-sm-block">
                  <label htmlFor="idUpload">
                     <span className="btn btn-icon btn-light btn-md btn-pill">
                        {/* card-image */}
                        <BsImage/>
                     </span>
                     <input
                        onChange={useUpload}
                        type="file"
                        multiple
                        id="idUpload"
                        style={{display: "none"}}
                     />
                  </label>
               </li>
               <li className="d-none d-sm-block">
                  <button className="btn btn-icon btn-light btn-md btn-pill">
                     {/* emoji-smile-fill */}
                     <BsFillEmojiWinkFill/>
                  </button>
               </li>
            </ul>
         </div>
         <div className="tyn-chat-form-enter">
            <input className="tyn-chat-form-input" ref={msgRef} onChange={onTyping}/>
            <ul className="tyn-list-inline me-n2 my-1">
               <li>
                  <span className="btn btn-icon btn-white btn-md btn-pill" >
                     <BsMicFill/>
                  </span>
               </li>
               <li>
                  <span
                     className="btn btn-icon btn-white btn-md btn-pill"
                     onClick={onSend}
                  >
                     {/* send-fill */}
                     <BsFillSendFill/>
                  </span>
               </li>
            </ul>
         </div>
      </div>

   )
}

export default FooterChat