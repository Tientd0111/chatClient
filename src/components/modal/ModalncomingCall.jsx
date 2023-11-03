import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Modal } from 'antd'

const ModalIncomingCall = forwardRef((props, ref) => {
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

   const {acceptCall} = props



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
         <div className="modal-dialog modal-dialog-centered modal-sm my-0">
            <div className="modal-content border-0">
               <div className="tyn-chat-call tyn-chat-call-video">
                  <div className="tyn-chat-call-stack">
                     <div className="tyn-chat-call-cover">
                        <img src="../../../src/assets/images/v-cover/2.jpg" alt="" />
                     </div>
                  </div>
                  <div className="tyn-chat-call-stack on-dark">
                     <div className="tyn-media-group tyn-media-vr tyn-media-center mt-auto">
                        <div className="tyn-media tyn-size-xl tyn-circle border border-2 border-white">
                           <img src="../../../src/assets/images/v-cover/1.jpg" alt="" />
                        </div>
                        <div className="tyn-media-col">
                           <div className="tyn-media-row has-dot-sap">
                              <span className="meta">VIdeo Call From ..</span>
                           </div>
                           <div className="tyn-media-row">
                              <h6 className="name">Konstantin Frank</h6>
                           </div>
                        </div>
                     </div>
                     <ul className="tyn-list-inline gap gap-3 mx-auto py-4 justify-content-center">
                        <li>
                           <button className="btn btn-icon btn-pill btn-danger">
                              {/* telephone-x-fill */}
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={16}
                                 height={16}
                                 fill="currentColor"
                                 className="bi bi-telephone-x-fill"
                                 viewBox="0 0 16 16"
                              >
                                 <path
                                    fillRule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm9.261 1.135a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708z"
                                 />
                              </svg>
                           </button>
                        </li>
                        <li>
                           <button onClick={acceptCall} className="btn btn-icon btn-pill btn-success">
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
                     </ul>
                  </div>
               </div>
            </div>
         </div>

      </Modal>
   );
});

export default ModalIncomingCall;