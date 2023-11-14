import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStateContext } from '@/contexts/ContextProvider.jsx'
import useUserStore from '@/stores/useUserStore.jsx'
import environmentConfig from '@/apis/environmentConfig.jsx'
import {
   BsAppIndicator,
   BsCheck2Circle,
   BsFillChatQuoteFill,
   BsMoonStarsFill,
   BsSubtract,
   BsUnlock,
} from 'react-icons/bs'
import { HiOutlineUser } from 'react-icons/hi'
import { AiOutlineCloseCircle, AiOutlineSetting } from 'react-icons/ai'
import { FiPower } from 'react-icons/fi'
import { HiMiniUserGroup } from 'react-icons/hi2'
import path from '@/constants/path.jsx'
import { useSocket } from '@/stores/useSocket.jsx'
import useNotificationStore from '@/stores/useNotificationStore.jsx'


const Header = () => {
   const [openModalProfile,setOpenModalProfile] = useState(false)
   const {currentMode,setCurrentMode,handleClick,isClicked,} = useStateContext()
   const [listNoti,setListNoti] = useState([])


   const {info} = useUserStore(state => ({
      info: state.info
   }))
   const {getMyNoti} = useNotificationStore(state => ({
      getMyNoti: state.getMyNoti
   }))
   const {socket} = useSocket(state => ({
      socket: state.socket
   }))
   const onLogout = () => {
      localStorage.removeItem('key')
      localStorage.removeItem('user')
      window.location.reload()
   }

   useEffect(()=>{
      getMyNoti().then(res => {
         setListNoti(res?.notification)
      })

      socket.on("return-add-friend" , (data) => {
         setListNoti(prevMessages => [data,...prevMessages])
      })
      return () => socket.off();
   },[])

   return (
      <nav className="tyn-appbar">
         <div className="tyn-appbar-wrap">
            <div className="tyn-appbar-logo">
               <Link className="tyn-logo" to={"index.html"}>
                  {/*<svg viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">*/}
                  {/*   <path*/}
                  {/*      d="M37.2654 14.793C37.2654 14.793 45.0771 20.3653 41.9525 29.5311C41.9525 29.5311 41.3796 31.1976 39.0361 34.4264L42.4732 37.9677C42.4732 37.9677 43.3065 39.478 41.5879 39.9987H24.9229C24.9229 39.9987 19.611 40.155 14.8198 36.9782C14.8198 36.9782 12.1638 35.2076 9.76825 31.9787L18.6215 32.0308C18.6215 32.0308 24.298 31.9787 29.7662 28.3333C35.2344 24.6878 37.4217 18.6988 37.2654 14.793Z"*/}
                  {/*      fill="#60A5FA" />*/}
                  {/*   <path*/}
                  {/*      d="M34.5053 12.814C32.2659 1.04441 19.3506 0.0549276 19.3506 0.0549276C8.31004 -0.674164 3.31055 6.09597 3.31055 6.09597C-4.24076 15.2617 3.6751 23.6983 3.6751 23.6983C3.6751 23.6983 2.99808 24.6357 0.862884 26.5105C-1.27231 28.3854 1.22743 29.3748 1.22743 29.3748H17.3404C23.4543 28.7499 25.9124 27.3959 25.9124 27.3959C36.328 22.0318 34.5053 12.814 34.5053 12.814ZM19.9963 18.7301H9.16412C8.41419 18.7301 7.81009 18.126 7.81009 17.3761C7.81009 16.6261 8.41419 16.022 9.16412 16.022H19.9963C20.7463 16.022 21.3504 16.6261 21.3504 17.3761C21.3504 18.126 20.7358 18.7301 19.9963 18.7301ZM25.3708 13.314H9.12245C8.37253 13.314 7.76843 12.7099 7.76843 11.96C7.76843 11.21 8.37253 10.6059 9.12245 10.6059H25.3708C26.1207 10.6059 26.7248 11.21 26.7248 11.96C26.7248 12.7099 26.1103 13.314 25.3708 13.314Z"*/}
                  {/*      fill="#2563EB" />*/}
                  {/*</svg>*/}
               </Link>
            </div>
            <div className="tyn-appbar-content">
               <ul className="tyn-appbar-nav tyn-appbar-nav-start">
                  <li className="tyn-appbar-item">
                     <NavLink className="tyn-appbar-link" to={path.CHAT}>
                        <BsFillChatQuoteFill/>
                        <span className="d-none">Chats</span>
                     </NavLink>
                  </li>
                  <li className="tyn-appbar-item">
                     <NavLink className="tyn-appbar-link" to={path.CONTACT}>
                        <HiMiniUserGroup/>
                        <span className="d-none">Contacts</span>
                     </NavLink>
                  </li>
                  <li className="tyn-appbar-item d-none d-sm-inline-flex">
                     <NavLink className="tyn-appbar-link" to={path.STORY}>
                        <BsSubtract/>
                        <span className="d-none">Stories</span>
                     </NavLink>
                  </li>
               </ul>
               <ul className="tyn-appbar-nav tyn-appbar-nav-end">
                  <li className="tyn-appbar-item">
                     <div onClick={()=>handleClick("notification")} className="tyn-appbar-link dropdown-toggle" data-bs-toggle="dropdown"
                        data-bs-offset="0,10" data-bs-auto-close="outside">
                        <BsAppIndicator/>
                        <span className="d-none">Notifications</span>
                     </div>
                     <div className={`dropdown-menu dropdown-menu-rg dropdown-menu-end ${isClicked.notification && "show"}`} style={{position: "absolute", inset: "0px 0px auto auto", margin: 0, transform: "translate3d(-88.8px, 70.4px, 0px)"}}>
                        <div className="dropdown-head">
                           <div className="title">
                              <h6>Notifications</h6>
                           </div>
                           <ul className="nav nav-tabs nav-tabs-line">
                              <li className="nav-item">
                                 <button className="nav-link active" data-bs-toggle="tab"
                                         data-bs-target="#notifications-all" type="button"> All
                                 </button>
                              </li>
                           </ul>
                        </div>
                        <div className="dropdown-gap">
                           <ul className="tyn-media-list gap gap-3">
                              {listNoti?.map((item,index)=>(
                                 <li key={index}>
                                    <div className="tyn-media-group align-items-start">
                                       <div className="tyn-media tyn-circle">
                                          <img src={environmentConfig.BASE_URI + item?.from?.avatar} alt=""/>
                                       </div>
                                       <div className="tyn-media-col">
                                          <div className="tyn-media-row">
                                             <span className="message"><strong>{item?.from?.name}</strong> Added You</span>
                                          </div>
                                          <div className="tyn-media-row has-dot-sap">
                                             <span className="meta">1 weeks ago</span>
                                          </div>
                                          {item?.type === 3 &&
                                             <div className="tyn-media-row">
                                                <ul className="tyn-btn-inline gap gap-3 pt-1">
                                                   <li>
                                                      <button className="btn btn-md btn-primary">
                                                         <BsCheck2Circle/>
                                                         <span>Accept</span>
                                                      </button>
                                                   </li>
                                                   <li>
                                                      <button className="btn btn-md btn-light">
                                                         <AiOutlineCloseCircle/>
                                                         <span>Reject</span>
                                                      </button>
                                                   </li>
                                                </ul>
                                             </div>
                                          }
                                       </div>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li className="tyn-appbar-item">
                     <span onClick={()=>setOpenModalProfile(!openModalProfile)} className="d-inline-flex dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown" data-bs-offset="0,10">
                        <div className="tyn-media tyn-size-lg tyn-circle">
                           <img src={environmentConfig.BASE_URI + info?.avatar} alt="" />
                        </div>
                     </span>
                     <div className={`dropdown-menu dropdown-menu-end ${openModalProfile && "show"}`} style={{position: "absolute", inset: "0px 0px auto auto", margin: 0, transform: "translate3d(-22.4px, 70.4px, 0px)"}} >
                        <div className="dropdown-gap">
                           <div className="tyn-media-group">
                              <div className="tyn-media tyn-size-lg">
                                 <img src={environmentConfig.BASE_URI + info?.avatar} alt=""/>
                              </div>
                              <div className="tyn-media-col">
                                 <div className="tyn-media-row">
                                    <h6 className="name">{info?.name}</h6>
                                    <div className="indicator varified">
                                       {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"*/}
                                       {/*     fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">*/}
                                       {/*   <path*/}
                                       {/*      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />*/}
                                       {/*</svg>*/}
                                    </div>
                                 </div>
                                 <div className="tyn-media-row has-dot-sap">
                                    <p className="content">{info?.nickname && `@${info?.nickname}`}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="dropdown-gap">
                           <div className="d-flex gap gap-2">
                              <BsMoonStarsFill fill={"#64748b"}/>
                              <div>
                                 <h6>Darkmode</h6>
                                 <ul className="d-flex align-items-center gap gap-3">
                                    <li className="inline-flex">
                                       <div className="form-check">
                                          <input className="form-check-input" type="radio" name="themeMode" id="dark"
                                                 value="dark" onChange={()=>{
                                                    setCurrentMode("dark")
                                                   document.body.style.backgroundColor = "#0f172a";
                                                 }} checked={currentMode === "dark" && true}/>
                                             <label className="form-check-label small" htmlFor="dark"> On </label>
                                       </div>
                                    </li>
                                    <li className="inline-flex">
                                       <div className="form-check">
                                          <input className="form-check-input" type="radio" name="themeMode" id="light"
                                                 value="light" onChange={()=>{
                                                    setCurrentMode("light")
                                                   document.body.style.backgroundColor = "#dbeafe";
                                          }} checked={currentMode === "light" && true}/>
                                             <label className="form-check-label small" htmlFor="light"> Off </label>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <ul className="tyn-list-links">
                           <li>
                              <Link to={"profile.html#profile-index"}>
                                 <HiOutlineUser/>
                                 <div>Profile</div>
                              </Link>
                           </li>
                           <li>
                              <Link to={"profile.html#profile-settings"}>
                                 <AiOutlineSetting/>
                                 <div>Settings</div>
                              </Link>
                           </li>
                           <li>
                              <Link to={"profile.html#profile-change-password"}>
                                 <BsUnlock/>
                                 <div>Change Password</div>
                              </Link>
                           </li>
                           <li className="dropdown-divider"/>
                           <li>
                              <span>
                                 <FiPower size={16}/>
                                 <div onClick={()=>onLogout()}>Log Out</div>
                              </span>
                           </li>
                        </ul>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default React.memo(Header)