import React from 'react'
import environmentConfig from '@/apis/environmentConfig.jsx'

const MessageChat = ({listMessage}) => {
   const id = JSON.parse(localStorage?.getItem("user"))._id

   return (
      <div className="tyn-chat-body js-scroll-to-end" id="tynChatBody">
         <div className="tyn-reply" style={{flexDirection:'column'}}>
            {listMessage?.map((item,index)=>(
               <div key={index} className={`tyn-reply-item  ${item?.sender?._id === id ? "outgoing":"incoming"}`}>
                  <div className="tyn-reply-group">
                     <div className="tyn-reply-bubble">
                        {item?.content &&
                           <div className="tyn-reply-text">
                              {item?.content}
                           </div>
                        }
                        {item?.message_image?.length > 0 &&
                           <div className="tyn-reply-media">
                              {item?.message_image.map((item,index)=>(
                                 <span
                                    key={index}
                                    className="glightbox tyn-thumb"
                                    data-gallery="media-photo"
                                 >
                                    <img src={environmentConfig.BASE_URI + item} className="tyn-image" alt="" />
                                 </span>
                              ))}
                           </div>

                        }
                        {/* tyn-reply-text */}
                        <ul className="tyn-reply-tools">
                           <li>
                              <button className="btn btn-icon btn-sm btn-transparent btn-pill">
                                 {/* emoji-smile-fill */}
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-emoji-smile-fill"
                                    viewBox="0 0 16 16"
                                 >
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                                 </svg>
                              </button>
                           </li>
                           {/* li */}
                           <li className="dropup-center">
                              <button
                                 className="btn btn-icon btn-sm btn-transparent btn-pill"
                                 data-bs-toggle="dropdown"
                              >
                                 {/* three-dots */}
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-three-dots"
                                    viewBox="0 0 16 16"
                                 >
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                 </svg>
                              </button>
                              <div className="dropdown-menu dropdown-menu-xxs">
                                 <ul className="tyn-list-links">
                                    <li>
                                       <a href="#">
                                          {/* pencil-square */}
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={16}
                                             height={16}
                                             fill="currentColor"
                                             className="bi bi-pencil-square"
                                             viewBox="0 0 16 16"
                                          >
                                             <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                             <path
                                                fillRule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                             />
                                          </svg>
                                          <span>Edit</span>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#">
                                          {/* trash */}
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width={16}
                                             height={16}
                                             fill="currentColor"
                                             className="bi bi-trash"
                                             viewBox="0 0 16 16"
                                          >
                                             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                             <path
                                                fillRule="evenodd"
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                             />
                                          </svg>
                                          <span>Delete</span>
                                       </a>
                                    </li>
                                 </ul>
                                 {/* .tyn-list-links */}
                              </div>
                              {/* .dropdown-menu */}
                           </li>
                           {/* li */}
                        </ul>
                        {/* .tyn-reply-tools */}
                     </div>
                     {/* .tyn-reply-bubble */}
                  </div>
                  {/* .tyn-reply-group */}
               </div>
            ))}
         </div>
         {/* .tyn-reply */}
      </div>

   )
}

export default React.memo(MessageChat)