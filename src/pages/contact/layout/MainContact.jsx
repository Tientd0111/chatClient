import React, { useEffect, useState } from 'react'
import environmentConfig from '@/apis/environmentConfig.jsx'
import useFriendStore from '@/stores/useFriendStore.jsx'
import { Tabs } from 'antd'
import { HiCake, HiMail } from 'react-icons/hi'
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsTwitter } from 'react-icons/bs'
import { BiLogoTiktok } from 'react-icons/bi'
import useWindowDimensions from '@/hook/useWindowDimensions.jsx'
import { AiOutlineClose } from 'react-icons/ai'
import Stories from '@/components/contact/Stories.jsx'

const MainContact = ({info,showInfo,onHideInfo}) => {
   const {width} = useWindowDimensions()
   console.log(info)
   return (
      <div className={`tyn-main tyn-content-inner ${showInfo && width < 768 ? "main-shown":""}`} id="tynMain">
         <div className="container">
            <div className="tyn-profile">
               <ul className="tyn-list-inline d-md-none translate-middle position-absolute start-50 z-1">
                  <li>
                     <button className="btn btn-icon btn-pill btn-white js-toggle-main" onClick={onHideInfo}>
                        {/* x-lg */}
                        <AiOutlineClose/>
                     </button>
                  </li>
               </ul>
               <div className="tyn-profile-head">
                  <div className="tyn-profile-cover">
                     <img
                        className="tyn-profile-cover-image"
                        src={environmentConfig.BASE_URI + info?.user?.cover}
                        alt=""
                     />
                  </div>
                  <div className="tyn-profile-info">
                     <div className="tyn-media-group align-items-start">
                        <div className="tyn-media tyn-media-bordered tyn-size-4xl tyn-profile-avatar">
                           <img src={environmentConfig.BASE_URI + info?.user?.avatar} alt="" />
                        </div>
                        <div className="tyn-media-col">
                           <div className="tyn-media-row">
                              <h4 className="name">
                                 {info?.name} <span className="username">{info?.user?.nickname && `@${info?.user?.nickname}`}</span>
                              </h4>
                           </div>
                           <div className="tyn-media-row has-dot-sap">
                              <span className="content">{info?.contact} Contacts</span>
                              <span className="meta">{info?.mutual} Mutual</span>
                           </div>
                           <div className="tyn-media-row pt-2">
                              <div className="tyn-media-multiple">
                                 {info?.listMutual.map((item)=>(
                                    <div key={item?._id} className="tyn-media tyn-circle tyn-size-md tyn-media-bordered">
                                       <img src={environmentConfig.BASE_URI + item?.user?.avatar} alt="" />
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* .tyn-media-group */}
                  </div>
                  {/* .tyn-profile-info */}
               </div>
               {/* .tyn-profile-head */}
               <div className="tyn-profile-nav">
                  <Tabs defaultActiveKey={1} style={{width:'100%'}} className="nav nav-tabs nav-tabs-line border-0">
                     <Tabs.TabPane tab={"About"} key={1} className="tab-pane show active" id="profile-about">
                        <div className={"tyn-profile-details"}>
                           <div className="row gy-4">
                              <div className="col-xl-5">
                                 <div className="tyn-profile-bio">
                                    <h5>About {info?.user?.name}</h5>
                                    <p style={{fontSize:'16px',color:"#94A3B8"}}>
                                       If you set your goals ridiculously high and it's a failure,
                                       you will fail above everyone else's success
                                    </p>
                                 </div>
                                 <ul className="tyn-list-inline gap gap-3 ms-auto">
                                    <li>
                                       <a href="#" className="btn btn-icon btn-light">
                                          {/* facebook */}
                                          <BsFacebook/>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#" className="btn btn-icon btn-light">
                                          {/* twitter */}
                                          <BsTwitter/>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#" className="btn btn-icon btn-light">
                                          {/* instagram */}
                                          <BsInstagram/>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#" className="btn btn-icon btn-light">
                                          {/* tiktok */}
                                          <BiLogoTiktok/>
                                       </a>
                                    </li>
                                 </ul>
                                 {/* .tyn-list-inline */}
                              </div>
                              {/* .col */}
                              <div className="col-12">
                                 <h5>Basic Info</h5>
                                 <ul className="d-flex gap gx-5 flex-wrap">
                                    <li>
                                       <div className="vstack">
                                          <div className="tyn-icon tyn-size-2xl mb-2">
                                             {/* birthday-cake */}
                                             <HiCake fill={"#64748b"}/>
                                          </div>
                                          <span className="tyn-subtext">Birth day</span>
                                          <h5>June 26</h5>
                                       </div>
                                    </li>
                                    {/* li */}
                                    <li>
                                       <div className="vstack">
                                          <div className="mb-2">
                                             {/* telephone-fill */}
                                             <BsFillTelephoneFill size={25} fill={"#64748b"}/>
                                          </div>
                                          <span className="tyn-subtext">Phone No</span>
                                          <h5>{info?.user?.phone}</h5>
                                       </div>
                                    </li>
                                    {/* li */}
                                    <li>
                                       <div className="vstack">
                                          <div className="mb-2">
                                             {/* envelope-fill */}
                                             <HiMail size={28} fill={"#64748b"}/>
                                          </div>
                                          <span className="tyn-subtext">Emails</span>
                                          <h5>{info?.user?.email}</h5>
                                       </div>
                                    </li>
                                    {/* li */}
                                 </ul>
                                 {/* ul */}
                              </div>
                              {/* .col */}
                           </div>
                        </div>
                     </Tabs.TabPane>
                     <Tabs.TabPane tab={"Mutual Contacts"} key={2} className="tab-pane" id="profile-contacts">
                        <div className='tyn-profile-details'>
                           <div className="row g-gs">
                              {info?.listMutual.map((item)=>(
                                 <div key={item?._id} className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6">
                                    <div className="border border-light rounded-3 py-4 px-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                       <div className="tyn-media tyn-size-2xl tyn-circle mb-3">
                                          <img src={environmentConfig.BASE_URI + item?.user?.avatar} alt="" />
                                       </div>
                                       <span className="tyn-subtext mb-1">@arnold_nces</span>
                                       <h6>{item?.user?.name}</h6>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </Tabs.TabPane>
                     <Tabs.TabPane tab={"Gallery"} key={3} className="tab-pane" id="profile-about" >

                     </Tabs.TabPane>
                     <Tabs.TabPane tab={"Stories"} key={4} className="tab-pane" id="profile-about">
                        <div className={"tyn-profile-details"}>
                           <Stories id={info?.user?._id}/>
                        </div>
                     </Tabs.TabPane>
                  </Tabs>
                  {/* .nav */}
                  {/* .tyn-list-inline */}
               </div>
               {/* .tyn-profile-nav */}
               {/*<div className="tyn-profile-details">*/}
               {/*   <div className="tab-content">*/}
               {/*      /!* .tab-pane *!/*/}
               {/*      <div className="tab-pane" id="profile-gallery" tabIndex={0}>*/}
               {/*         <div className="row g-3">*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/1.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-1.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/2.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-2.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/3.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-3.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/4.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-4.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/5.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-5.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/6.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-6.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/7.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-7.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/8.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-8.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/9.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-9.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/10.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-10.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/11.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-11.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/12.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-12.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/13.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-13.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/14.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-14.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/15.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-15.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*            <div className="col-xxl-2 col-xl-3 col-lg-4 col-6">*/}
               {/*               <a*/}
               {/*                  href="images/gallery/contact/16.jpg"*/}
               {/*                  className="glightbox tyn-thumb"*/}
               {/*               >*/}
               {/*                  <img*/}
               {/*                     src="images/gallery/contact/thumb-16.jpg"*/}
               {/*                     className="tyn-image"*/}
               {/*                     alt=""*/}
               {/*                  />*/}
               {/*               </a>*/}
               {/*            </div>*/}
               {/*            /!* .col *!/*/}
               {/*         </div>*/}
               {/*         /!* .row *!/*/}
               {/*      </div>*/}
               {/*      /!* .tab-pane *!/*/}
               {/*      <div className="tab-pane" id="profile-stories" tabIndex={0}>*/}

               {/*         /!* .tyn-profile-stories *!/*/}
               {/*      </div>*/}
               {/*      /!* .tab-pane *!/*/}
               {/*   </div>*/}
               {/*   /!* .tab-content *!/*/}
               {/*</div>*/}
               {/* .tyn-profile-details */}
            </div>
         </div>
         {/* .container */}
      </div>
   )
}

export default React.memo(MainContact)