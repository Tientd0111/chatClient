import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Modal } from 'antd'
import path from '@/constants/path.jsx'
import ReactPlayer from 'react-player'
import { BsFillMicFill, BsFillMicMuteFill, BsFillTelephoneXFill } from 'react-icons/bs'

const ModalOnGoingCall = forwardRef((props, ref) => {
   const [show, setShow] = useState(false);
   const cancel = () => {
      setShow(false)
   }
   useImperativeHandle(ref, () => ({
      open: () => setShow(true),
      close: () => {
         setShow(false)
      }
   }));

   const {myStream,remoteStream,onMute,mic,endCall,sendStreams} = props

   console.log("remote",remoteStream)
   console.log(mic)

   return (
      <Modal
         footer={null}
         title={""}
         open={show}
         className={"call"}
         closable={false}
         width={"320px"}
         transitionName=""
         maskTransitionName=""
      >
         <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content border-0">
               <div className="tyn-chat-call tyn-chat-call-video">
                  <div className="tyn-chat-call-stack">
                     <div className="tyn-chat-call-cover">
                        {/*<img src="../../../src/assets/images/v-cover/1.jpg" alt="" />*/}
                        <ReactPlayer url={remoteStream} playing={true} width={320} height={520} muted/>
                     </div>
                  </div>
                  {/* .tyn-chat-call-stack */}
                  <div className="tyn-chat-call-stack on-dark">
                     <div className="tyn-media-group p-4">
                        <div className="tyn-media-col align-self-start pt-3">
                           <div className="tyn-media-row has-dot-sap">
                              <span className="meta">Talking With ...</span>
                           </div>
                           <div className="tyn-media-row">
                              <h6 className="name">Konstantin Frank</h6>
                           </div>
                           <div className="tyn-media-row has-dot-sap">
                              <span className="content">02:09 min</span>
                           </div>
                        </div>
                        <div className="tyn-media tyn-media-1x1_3 tyn-size-3xl border-dark">
                           {/*<img src="../../../src/assets/images/v-cover/2.jpg" alt="" />*/}
                           <ReactPlayer url={myStream} playing={true} width={96} height={125} muted={mic}/>

                        </div>
                     </div>
                     {/* .tyn-media-group */}
                     <ul className="tyn-list-inline gap gap-3 mx-auto py-4 justify-content-center  mt-auto">
                        <li>
                           <button
                              className="btn btn-icon btn-pill btn-light"
                              data-bs-toggle="modal"
                              data-bs-target="#callingScreen"
                              onClick={sendStreams}
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
                        <li>
                           <button className="btn btn-icon btn-pill btn-light" onClick={onMute}>
                              {/* mic-mute-fill */}
                              {!mic ?
                                 <BsFillMicFill/>:
                                 <BsFillMicMuteFill/>
                              }
                           </button>
                        </li>
                        <li>
                           <button
                              className="btn btn-icon btn-pill btn-danger"
                              data-bs-dismiss="modal"
                              onClick={endCall}
                           >
                              {/* telephone-x-fill */}
                              <BsFillTelephoneXFill/>
                           </button>
                        </li>
                     </ul>
                     {/* .tyn-list-inline */}
                  </div>
                  {/* .tyn-chat-call-stack */}
               </div>
               {/* .tyn-chat-call */}
            </div>
            {/* .modal-content */}
         </div>
      </Modal>
   );
});

export default ModalOnGoingCall;