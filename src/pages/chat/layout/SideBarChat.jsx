import React from 'react'
import environmentConfig from '@/apis/environmentConfig.jsx'
import { getDate } from '@/utils/getDate.jsx'

const SideBarChat = ({listConversation,idConversation,chooseConversation}) => {
   const id = JSON.parse(localStorage?.getItem("user"))._id
   return (
      <div className="tyn-aside tyn-aside-base">
         <div className="tyn-aside-head">
            <div className="tyn-aside-head-text">
               <h3 className="tyn-aside-title">Chats</h3>
            </div>
            <div className="tyn-aside-head-tools">
               <ul className="link-group gap gx-3">
                  <li className="dropdown">
                     <button
                        className="link"
                        data-bs-toggle="modal"
                        data-bs-target="#newChat"
                     >
                        {/* plus */}
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width={16}
                           height={16}
                           fill="currentColor"
                           className="bi bi-plus"
                           viewBox="0 0 16 16"
                        >
                           <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        <span>New</span>
                     </button>
                  </li>
                  {/* li */}
                  <li className="dropdown">
                     <button
                        className="link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,10"
                     >
                        {/* filter */}
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width={16}
                           height={16}
                           fill="currentColor"
                           className="bi bi-filter"
                           viewBox="0 0 16 16"
                        >
                           <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <span>Filter</span>
                     </button>
                     <div className="dropdown-menu dropdown-menu-end">
                        <ul className="tyn-list-links nav nav-tabs border-0">
                           <li>
                              <button
                                 className="nav-link active"
                                 data-bs-toggle="tab"
                                 data-bs-target="#all-chats"
                              >
                                 {/* chat-square-text */}
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-chat-square-text"
                                    viewBox="0 0 16 16"
                                 >
                                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                 </svg>
                                 <span>All Chats</span>
                              </button>
                           </li>
                        </ul>
                        {/* .nav */}
                     </div>
                     {/* .dropdown-menu */}
                  </li>
                  {/* li */}
               </ul>
               {/* .link-group */}
            </div>
            {/* .tyn-aside-head-tools */}
         </div>
         {/* .tyn-aside-head */}
         <div className="tyn-aside-body" data-simplebar="">
            <div className="tyn-aside-search">
               <div className="form-group tyn-pill">
                  <div className="form-control-wrap">
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
                        className="form-control form-control-solid"
                        id="search"
                        placeholder="Search contact / chat"
                     />
                  </div>
               </div>
            </div>
            {/* .tyn-aside-search */}
            <div className="tab-content">
               <div
                  className="tab-pane show active"
                  id="all-chats"
                  tabIndex={0}
                  role="tabpanel"
               >
                  <ul className="tyn-aside-list">
                     {listConversation?.map((item)=>(
                        <li key={item?._id}
                            className={`tyn-aside-item js-toggle-main ${idConversation === item?._id ? "active" :""}`}
                            onClick={()=>chooseConversation(item?._id)}
                        >
                           <div className="tyn-media-group">
                              <div className="tyn-media tyn-size-lg">
                                 <img src={
                                    item?.user_1?._id === id ?
                                       (environmentConfig.BASE_URI + item?.user_2?.avatar) : (environmentConfig.BASE_URI + item?.user_1?.avatar)
                                 } alt="" />
                              </div>
                              <div className="tyn-media-col">
                                 <div className="tyn-media-row">
                                    <h6 className="name">{
                                       item?.user_1?._id === id ? item?.user_2?.name : item?.user_1?.name
                                    }</h6>
                                    <span className="typing">typing ...</span>
                                 </div>
                                 <div className="tyn-media-row has-dot-sap">
                                    {item?.message &&
                                       <>
                                          <p className="content">{item?.message?.sender === id ? `Bạn: ${item?.message?.content}`: item?.message?.content}</p>
                                          <span className="meta">{getDate(item?.message?.created_at)}</span>
                                       </>
                                    }
                                 </div>
                              </div>
                              <div className="tyn-media-option tyn-aside-item-option">
                                 <ul className="tyn-media-option-list">
                                    <li className="dropdown">
                                       <button
                                          className="btn btn-icon btn-white btn-pill dropdown-toggle"
                                          data-bs-toggle="dropdown"
                                          data-bs-offset="0,0"
                                          data-bs-auto-close="outside"
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
                                       <div className="dropdown-menu dropdown-menu-end">
                                          <ul className="tyn-list-links">
                                             <li>
                                                <a href="#">
                                                   {/* check */}
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      fill="currentColor"
                                                      className="bi bi-check"
                                                      viewBox="0 0 16 16"
                                                   >
                                                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                   </svg>
                                                   <span>Mark as Read</span>
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#">
                                                   {/* bell */}
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      fill="currentColor"
                                                      className="bi bi-bell"
                                                      viewBox="0 0 16 16"
                                                   >
                                                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                                   </svg>
                                                   <span>Mute Notifications</span>
                                                </a>
                                             </li>
                                             <li>
                                                <a href="contacts.html">
                                                   {/* person */}
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      fill="currentColor"
                                                      className="bi bi-person"
                                                      viewBox="0 0 16 16"
                                                   >
                                                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                                   </svg>
                                                   <span>View Profile</span>
                                                </a>
                                             </li>
                                             <li className="dropdown-divider" />
                                             <li>
                                                <a href="#callingScreen" data-bs-toggle="modal">
                                                   {/* telephone */}
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      fill="currentColor"
                                                      className="bi bi-telephone"
                                                      viewBox="0 0 16 16"
                                                   >
                                                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                   </svg>
                                                   <span>Audio Call</span>
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#videoCallingScreen" data-bs-toggle="modal">
                                                   {/* camera-video */}
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      fill="currentColor"
                                                      className="bi bi-camera-video"
                                                      viewBox="0 0 16 16"
                                                   >
                                                      <path
                                                         fillRule="evenodd"
                                                         d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
                                                      />
                                                   </svg>
                                                   <span>Video Call</span>
                                                </a>
                                             </li>
                                             <li className="dropdown-divider" />
                                             <li>
                                                <a href="#">
                                                   {/* file-earmark-arrow-down */}
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      fill="currentColor"
                                                      className="bi bi-file-earmark-arrow-down"
                                                      viewBox="0 0 16 16"
                                                   >
                                                      <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                                                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                   </svg>
                                                   <span>Archive</span>
                                                </a>
                                             </li>
                                             <li>
                                                <a href="#deleteChat" data-bs-toggle="modal">
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
                                             <li>
                                                <a href="#">
                                                   {/* exclamation-triangle */}
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      fill="currentColor"
                                                      className="bi bi-exclamation-triangle"
                                                      viewBox="0 0 16 16"
                                                   >
                                                      <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                                                      <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                                                   </svg>
                                                   <span>Report</span>
                                                </a>
                                             </li>
                                          </ul>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     ))}
                     {/* .tyn-aside-item */}

                  </ul>
               </div>
               {/* .tab-pane */}
               <div
                  className="tab-pane"
                  id="active-contacts"
                  tabIndex={0}
                  role="tabpanel"
               >
                  <ul className="tyn-aside-list">
                     <li className="tyn-aside-item js-toggle-main active">
                        <div className="tyn-media-group">
                           <div className="tyn-media tyn-size-lg">
                              <img src="../../../../src/assets/images/avatar/1.jpg" alt="" />
                           </div>
                           <div className="tyn-media-col">
                              <div className="tyn-media-row">
                                 <h6 className="name">Jasmine Thompson</h6>
                                 <span className="typing">typing ...</span>
                              </div>
                              <div className="tyn-media-row has-dot-sap">
                                 <p className="content">Had they visited Rome before</p>
                                 <span className="meta">45 min</span>
                              </div>
                           </div>
                           <div className="tyn-media-option tyn-aside-item-option">
                              <ul className="tyn-media-option-list">
                                 <li className="dropdown">
                                    <button
                                       className="btn btn-icon btn-white btn-pill dropdown-toggle"
                                       data-bs-toggle="dropdown"
                                       data-bs-offset="0,0"
                                       data-bs-auto-close="outside"
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
                                    <div className="dropdown-menu dropdown-menu-end">
                                       <ul className="tyn-list-links">
                                          <li>
                                             <a href="#">
                                                {/* check */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-check"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                                <span>Mark as Read</span>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#">
                                                {/* bell */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-bell"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                                </svg>
                                                <span>Mute Notifications</span>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="contacts.html">
                                                {/* person */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-person"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                                </svg>
                                                <span>View Profile</span>
                                             </a>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li>
                                             <a href="#callingScreen" data-bs-toggle="modal">
                                                {/* telephone */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-telephone"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>
                                                <span>Audio Call</span>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#videoCallingScreen" data-bs-toggle="modal">
                                                {/* camera-video */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-camera-video"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path
                                                      fillRule="evenodd"
                                                      d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
                                                   />
                                                </svg>
                                                <span>Video Call</span>
                                             </a>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li>
                                             <a href="#">
                                                {/* file-earmark-arrow-down */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-file-earmark-arrow-down"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                                                   <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                </svg>
                                                <span>Archive</span>
                                             </a>
                                          </li>
                                          <li>
                                             <a href="#deleteChat" data-bs-toggle="modal">
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
                                          <li>
                                             <a href="#">
                                                {/* exclamation-triangle */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-exclamation-triangle"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                                                   <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                                                </svg>
                                                <span>Report</span>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
            {/* .tab-content */}
         </div>
         {/* .tyn-aside-body */}
      </div>

   )
}

export default SideBarChat