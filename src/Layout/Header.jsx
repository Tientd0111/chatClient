import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from "../assets/images/avatar/3.jpg"
import { Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useStateContext } from '@/contexts/ContextProvider.jsx'

const items = [
   {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
   },
   {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
   },
   {
      label: '3rd menu item',
      key: '3',
   },
];
const Header = () => {
   const [openModalProfile,setOpenModalProfile] = useState(false)
   const {currentMode,setCurrentMode} = useStateContext()

   const onLogout = () => {
      localStorage.removeItem('key')
      localStorage.removeItem('user')
      window.location.reload()
   }

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
                     <Link className="tyn-appbar-link" to={"index.html"}>
                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                        {/*     className="bi bi-chat-text-fill" viewBox="0 0 16 16">*/}
                        {/*   <path*/}
                        {/*      d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />*/}
                        {/*</svg>*/}
                        <span className="d-none">Chats</span>
                     </Link>
                  </li>
                  <li className="tyn-appbar-item">
                     <Link className="tyn-appbar-link" to={"contacts.html"}>
                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                        {/*     className="bi bi-person-lines-fill" viewBox="0 0 16 16">*/}
                        {/*   <path*/}
                        {/*      d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />*/}
                        {/*</svg>*/}
                        <span className="d-none">Contacts</span>
                     </Link>
                  </li>
                  <li className="tyn-appbar-item d-none d-sm-inline-flex">
                     <Link className="tyn-appbar-link" to={"stories.html"}>
                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                        {/*     className="bi bi-subtract" viewBox="0 0 16 16">*/}
                        {/*   <path*/}
                        {/*      d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />*/}
                        {/*</svg>*/}
                        <span className="d-none">Stories</span>
                     </Link>
                  </li>
               </ul>
               <ul className="tyn-appbar-nav tyn-appbar-nav-end">
                  <li className="tyn-appbar-item dropdown">
                     <Dropdown
                        menu={{
                           items,
                        }}
                        trigger={['click']}
                     >
                        <span className="tyn-appbar-link dropdown-toggle" data-bs-toggle="dropdown"
                                 data-bs-offset="0,10">
                              {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                              {/*     className="bi bi-grid-fill" viewBox="0 0 16 16">*/}
                              {/*   <path*/}
                              {/*      d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />*/}
                              {/*</svg>*/}
                              <span className="d-none">Menu</span>
                        </span>
                     </Dropdown>
                  </li>
                  <li className="tyn-appbar-item">
                     <Link className="tyn-appbar-link dropdown-toggle" data-bs-toggle="dropdown" to={"#"}
                        data-bs-offset="0,10" data-bs-auto-close="outside">
                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                        {/*     className="bi bi-app-indicator" viewBox="0 0 16 16">*/}
                        {/*   <path*/}
                        {/*      d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />*/}
                        {/*   <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />*/}
                        {/*</svg>*/}
                        <span className="d-none">Notifications</span>
                     </Link>
                     <div className="dropdown-menu dropdown-menu-rg dropdown-menu-end">
                        <div className="dropdown-head">
                           <div className="title">
                              <h6>Notifications</h6>
                           </div>
                           <ul className="nav nav-tabs nav-tabs-line">
                              <li className="nav-item">
                                 <button className="nav-link" data-bs-toggle="tab"
                                         data-bs-target="#notifications-unread" type="button"> Unread
                                 </button>
                              </li>
                              <li className="nav-item">
                                 <button className="nav-link active" data-bs-toggle="tab"
                                         data-bs-target="#notifications-all" type="button"> All
                                 </button>
                              </li>
                           </ul>
                        </div>
                        <div className="dropdown-gap">
                           <ul className="tyn-media-list gap gap-3">
                              <li>
                                 <div className="tyn-media-group">
                                    <div className="tyn-media tyn-circle">
                                       <img src="../assets/images/avatar/1.jpg" alt=""/>
                                    </div>
                                    <div className="tyn-media-col">
                                       <div className="tyn-media-row">
                                          <span className="message"><strong>Phillip Burke</strong> Sent message</span>
                                       </div>
                                       <div className="tyn-media-row">
                                          <span className="meta">10 Hours ago</span>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="tyn-media-group align-items-start">
                                    <div className="tyn-media tyn-circle">
                                       <img src="../assets/images/avatar/2.jpg" alt="" />
                                    </div>
                                    <div className="tyn-media-col">
                                       <div className="tyn-media-row">
                                          <span
                                             className="message">Missed call from <strong>Romy Schulte</strong></span>
                                       </div>
                                       <div className="tyn-media-row has-dot-sap">
                                          <span className="meta">2 days ago</span>
                                       </div>
                                       <div className="tyn-media-row">
                                          <ul className="tyn-btn-inline gap gap-2 pt-1">
                                             <li>
                                                <button className="btn btn-md btn-light">
                                                   {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"*/}
                                                   {/*     fill="currentColor" className="bi bi-telephone"*/}
                                                   {/*     viewBox="0 0 16 16">*/}
                                                   {/*   <path*/}
                                                   {/*      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />*/}
                                                   {/*</svg>*/}
                                                   <span>Call Back</span>
                                                </button>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="tyn-media-group align-items-start">
                                    <div className="tyn-media tyn-circle">
                                       <img src="../assets/images/avatar/3.jpg" alt=""/>
                                    </div>
                                    <div className="tyn-media-col">
                                       <div className="tyn-media-row">
                                          <span className="message"><strong>Thomas Poulain</strong> Added You</span>
                                       </div>
                                       <div className="tyn-media-row has-dot-sap">
                                          <span className="meta">1 weeks ago</span>
                                       </div>
                                       <div className="tyn-media-row">
                                          <ul className="tyn-btn-inline gap gap-3 pt-1">
                                             <li>
                                                <button className="btn btn-md btn-primary">
                                                   {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"*/}
                                                   {/*     fill="currentColor" className="bi bi-check2-circle"*/}
                                                   {/*     viewBox="0 0 16 16">*/}
                                                   {/*   <path*/}
                                                   {/*      d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />*/}
                                                   {/*   <path*/}
                                                   {/*      d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />*/}
                                                   {/*</svg>*/}
                                                   <span>Accept</span>
                                                </button>
                                             </li>
                                             <li>
                                                <button className="btn btn-md btn-light">
                                                   {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"*/}
                                                   {/*     fill="currentColor" className="bi bi-x-circle"*/}
                                                   {/*     viewBox="0 0 16 16">*/}
                                                   {/*   <path*/}
                                                   {/*      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />*/}
                                                   {/*   <path*/}
                                                   {/*      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />*/}
                                                   {/*</svg>*/}
                                                   <span>Reject</span>
                                                </button>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="tyn-media-group">
                                    <div className="tyn-media tyn-circle">
                                       <img src="../assets/images/avatar/4.jpg" alt=""/>
                                    </div>
                                    <div className="tyn-media-col">
                                       <div className="tyn-media-row">
                                          <span className="message"><strong>Gabriel Schmitz</strong> Sent message</span>
                                       </div>
                                       <div className="tyn-media-row has-dot-sap">
                                          <span className="meta">1 Months ago</span>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li className="tyn-appbar-item">
                     <span onClick={()=>setOpenModalProfile(!openModalProfile)} className="d-inline-flex dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown" data-bs-offset="0,10">
                        <div className="tyn-media tyn-size-lg tyn-circle">
                           <img src={avatar} alt="" />
                        </div>
                     </span>
                     <div className={`dropdown-menu dropdown-menu-end ${openModalProfile && "show"}`} style={{position: "absolute", inset: "0px 0px auto auto", margin: 0, transform: "translate3d(-22.4px, 70.4px, 0px)"}} >
                        <div className="dropdown-gap">
                           <div className="tyn-media-group">
                              <div className="tyn-media tyn-size-lg">
                                 <img src={avatar} alt=""/>
                              </div>
                              <div className="tyn-media-col">
                                 <div className="tyn-media-row">
                                    <h6 className="name">Marie George</h6>
                                    <div className="indicator varified">
                                       {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"*/}
                                       {/*     fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">*/}
                                       {/*   <path*/}
                                       {/*      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />*/}
                                       {/*</svg>*/}
                                    </div>
                                 </div>
                                 <div className="tyn-media-row has-dot-sap">
                                    <p className="content">Liked that disco music</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="dropdown-gap">
                           <div className="d-flex gap gap-2">
                              {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                              {/*     className="bi bi-moon-fill" viewBox="0 0 16 16">*/}
                              {/*   <path*/}
                              {/*      d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />*/}
                              {/*</svg>*/}
                              <div>
                                 <h6>Darkmode</h6>
                                 <ul className="d-flex align-items-center gap gap-3">
                                    <li className="inline-flex">
                                       <div className="form-check">
                                          <input className="form-check-input" type="radio" name="themeMode" id="dark"
                                                 value="dark" onClick={()=>setCurrentMode("dark")} checked={currentMode === "dark" && true}/>
                                             <label className="form-check-label small" htmlFor="dark"> On </label>
                                       </div>
                                    </li>
                                    <li className="inline-flex">
                                       <div className="form-check">
                                          <input className="form-check-input" type="radio" name="themeMode" id="light"
                                                 value="light" onClick={()=>setCurrentMode("light")} checked={currentMode === "light" && true}/>
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
                                 {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                                 {/*     className="bi bi-person" viewBox="0 0 16 16">*/}
                                 {/*   <path*/}
                                 {/*      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />*/}
                                 {/*</svg>*/}
                                 <span>Profile</span>
                              </Link>
                           </li>
                           <li>
                              <Link to={"profile.html#profile-settings"}>
                                 {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                                 {/*     className="bi bi-gear" viewBox="0 0 16 16">*/}
                                 {/*   <path*/}
                                 {/*      d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />*/}
                                 {/*   <path*/}
                                 {/*      d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />*/}
                                 {/*</svg>*/}
                                 <span>Settings</span>
                              </Link>
                           </li>
                           <li>
                              <Link to={"profile.html#profile-change-password"}>
                                 {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                                 {/*     className="bi bi-unlock" viewBox="0 0 16 16">*/}
                                 {/*   <path*/}
                                 {/*      d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z" />*/}
                                 {/*</svg>*/}
                                 <span>Change Password</span>
                              </Link>
                           </li>
                           <li className="dropdown-divider"></li>
                           <li>
                              <span>
                                 {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"*/}
                                 {/*     className="bi bi-power" viewBox="0 0 16 16">*/}
                                 {/*   <path d="M7.5 1v7h1V1h-1z" />*/}
                                 {/*   <path*/}
                                 {/*      d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />*/}
                                 {/*</svg>*/}
                                 <span onClick={()=>onLogout()}>Log Out</span>
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

export default Header