import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Modal } from 'antd'
import path from '@/constants/path.jsx'
import ReactPlayer from 'react-player'
import {
   BsFillCameraVideoFill,
   BsFillCameraVideoOffFill,
   BsFillMicFill,
   BsFillMicMuteFill,
   BsFillTelephoneXFill,
} from 'react-icons/bs'
import { useSocket } from '@/stores/useSocket.jsx'
import { IoIosReverseCamera } from 'react-icons/io'

const ModalOnGoingCall = forwardRef((props, ref) => {
   const {socket} = useSocket(state => ({
      socket: state.socket
   }))

   const [show, setShow] = useState(false);
   // const [statusVideo, setStatusVideo] = useState(true);

   const cancel = () => {
      setShow(false)
   }
   useImperativeHandle(ref, () => ({
      open: () => setShow(true),
      close: () => {
         setShow(false)
      }
   }));

   const {myStream,remoteStream,handleMic,mic,endCall,sendStreams,video} = props
   const [statusVideo,setStatusVideo] = useState(true)
   useEffect(()=>{
      socket.on('status-video', (data)=>{
         setStatusVideo(data.status)
      })
      return () => socket.off()
   },[])
   console.log(statusVideo)
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
                        {statusVideo ?
                           <ReactPlayer url={remoteStream} playing={true} width={320} height={520} /> :
                           <img src="../../../src/assets/images/v-cover/2.jpg" alt="" />
                        }
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
                           {video ?
                              <ReactPlayer url={myStream} playing={true} width={96} height={125} muted />:
                              <img src="../../../src/assets/images/v-cover/2.jpg" alt="" />
                           }
                        </div>
                     </div>
                     {/* .tyn-media-group */}
                     <ul className="tyn-list-inline gap gap-3 mx-auto py-4 justify-content-center  mt-auto">
                        <li>
                           <button
                              className="btn btn-icon btn-pill btn-light"
                              data-bs-toggle="modal"
                              data-bs-target="#callingScreen"
                           >
                              <IoIosReverseCamera/>
                           </button>
                        </li>
                        <li>
                           <button
                              className="btn btn-icon btn-pill btn-light"
                              data-bs-toggle="modal"
                              data-bs-target="#callingScreen"
                              onClick={sendStreams}
                           >
                              {/* camera-video-fill */}
                              {video ?
                                 <BsFillCameraVideoFill/> :
                                 <BsFillCameraVideoOffFill/>
                              }
                           </button>
                        </li>
                        <li>
                           <button className="btn btn-icon btn-pill btn-light" onClick={handleMic}>
                              {/* mic-mute-fill */}
                              {mic ?
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