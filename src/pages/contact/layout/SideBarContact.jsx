import React from 'react'
import { Tabs } from 'antd'
import environmentConfig from '@/apis/environmentConfig.jsx'

const SideBarContact = ({listFriend,id,chooseFriend}) => {

   return (
      <div className="tyn-aside tyn-aside-base">
         <div className="tyn-aside-head">
            <div className="tyn-aside-head-text">
               <h3 className="tyn-aside-title tyn-title">Contacts</h3>
               <span className="tyn-subtext">127 Contacts</span>
            </div>
            <div className="tyn-aside-head-tools">
               <ul className="tyn-list-inline gap gap-3">
                  <li>
                     <button
                        className="btn btn-icon btn-light btn-md btn-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#addContact"
                     >
                        {/* plus-lg */}
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width={16}
                           height={16}
                           fill="currentColor"
                           className="bi bi-plus-lg"
                           viewBox="0 0 16 16"
                        >
                           <path
                              fillRule="evenodd"
                              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                           />
                        </svg>
                     </button>
                  </li>
               </ul>
            </div>
         </div>

         {/* .tyn-aside-row */}
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
            <Tabs defaultActiveKey={1} className="tyn-aside-row py-0 tab-contact" style={{padding:0}}>
               <Tabs.TabPane tab={"All"} key={1} className="tab-pane show active">
                  <ul className="tyn-aside-list">
                     {listFriend.map((item)=>(
                        <li className={`tyn-aside-item js-toggle-main ${item?._id === id ? "active":""}`} key={item?.index} onClick={()=>chooseFriend(item?._id)}>
                           <div className="tyn-media-group">
                              <div className="tyn-media tyn-size-lg">
                                 <img src={environmentConfig.BASE_URI + item?.user?.avatar} alt="" />
                              </div>
                              <div className="tyn-media-col">
                                 <div className="tyn-media-row">
                                    <h6 className="name">{item?.user?.name}</h6>
                                 </div>
                                 <div className="tyn-media-row" style={{height:'18px'}}>
                                    <p className="content">{item?.user?.nickname && `@${item?.user?.nickname}`}</p>
                                 </div>
                              </div>
                              <div className="tyn-media-option tyn-aside-item-option">
                                 <ul className="tyn-media-option-list">
                                    <li className="dropdown">
                                       <button
                                          className="btn btn-icon btn-white btn-pill dropdown-toggle"
                                          data-bs-toggle="dropdown"
                                          data-bs-offset="0,0"
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
                                             <li>
                                                <a href="index.html">
                                                   {/* chat */}
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      fill="currentColor"
                                                      className="bi bi-chat"
                                                      viewBox="0 0 16 16"
                                                   >
                                                      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                                   </svg>
                                                   <span>Send Message</span>
                                                </a>
                                             </li>
                                             <li className="dropdown-divider" />
                                             <li>
                                                <a href="#">
                                                   {/* person-x */}
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={16}
                                                      height={16}
                                                      fill="currentColor"
                                                      className="bi bi-person-x"
                                                      viewBox="0 0 16 16"
                                                   >
                                                      <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z" />
                                                   </svg>
                                                   <span>Block</span>
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
                                          {/* .tyn-list-links */}
                                       </div>
                                       {/* .dropdown-menu */}
                                    </li>
                                 </ul>
                                 {/* .tyn-media-option-list */}
                              </div>
                              {/* .tyn-media-option */}
                           </div>
                        </li>
                     ))}
                  </ul>
               </Tabs.TabPane>
               <Tabs.TabPane tab={"New"} key={2} className="tab-pane show">
                  <ul className="tyn-aside-list">
                     <li className="tyn-aside-item js-toggle-main active">
                        <div className="tyn-media-group">
                           <div className="tyn-media tyn-size-lg">
                              <img src="images/avatar/1.jpg" alt="" />
                           </div>
                           <div className="tyn-media-col">
                              <div className="tyn-media-row">
                                 <h6 className="name">Jasmine Thompson new</h6>
                              </div>
                              <div className="tyn-media-row">
                                 <p className="content">@thompson_jasmine</p>
                              </div>
                           </div>
                           <div className="tyn-media-option tyn-aside-item-option">
                              <ul className="tyn-media-option-list">
                                 <li className="dropdown">
                                    <button
                                       className="btn btn-icon btn-white btn-pill dropdown-toggle"
                                       data-bs-toggle="dropdown"
                                       data-bs-offset="0,0"
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
                                          <li>
                                             <a href="index.html">
                                                {/* chat */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-chat"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                                </svg>
                                                <span>Send Message</span>
                                             </a>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li>
                                             <a href="#">
                                                {/* person-x */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-person-x"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                                   <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z" />
                                                </svg>
                                                <span>Block</span>
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
                                       {/* .tyn-list-links */}
                                    </div>
                                    {/* .dropdown-menu */}
                                 </li>
                              </ul>
                              {/* .tyn-media-option-list */}
                           </div>
                           {/* .tyn-media-option */}
                        </div>
                     </li>
                  </ul>
               </Tabs.TabPane>
               <Tabs.TabPane tab={"Blocked"} key={3} className="tab-pane show">
                  <ul className="tyn-aside-list">
                     <li className="tyn-aside-item js-toggle-main active">
                        <div className="tyn-media-group">
                           <div className="tyn-media tyn-size-lg">
                              <img src="images/avatar/1.jpg" alt="" />
                           </div>
                           <div className="tyn-media-col">
                              <div className="tyn-media-row">
                                 <h6 className="name">Jasmine Thompson new</h6>
                              </div>
                              <div className="tyn-media-row">
                                 <p className="content">@thompson_jasmine</p>
                              </div>
                           </div>
                           <div className="tyn-media-option tyn-aside-item-option">
                              <ul className="tyn-media-option-list">
                                 <li className="dropdown">
                                    <button
                                       className="btn btn-icon btn-white btn-pill dropdown-toggle"
                                       data-bs-toggle="dropdown"
                                       data-bs-offset="0,0"
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
                                          <li>
                                             <a href="index.html">
                                                {/* chat */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-chat"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                                </svg>
                                                <span>Send Message</span>
                                             </a>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li>
                                             <a href="#">
                                                {/* person-x */}
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={16}
                                                   height={16}
                                                   fill="currentColor"
                                                   className="bi bi-person-x"
                                                   viewBox="0 0 16 16"
                                                >
                                                   <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                                   <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z" />
                                                </svg>
                                                <span>Block</span>
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
                                       {/* .tyn-list-links */}
                                    </div>
                                    {/* .dropdown-menu */}
                                 </li>
                              </ul>
                              {/* .tyn-media-option-list */}
                           </div>
                           {/* .tyn-media-option */}
                        </div>
                     </li>
                  </ul>
               </Tabs.TabPane>
            </Tabs>
         </div>
         {/* .tyn-aside-body */}
      </div>

   )
}

export default React.memo(SideBarContact)