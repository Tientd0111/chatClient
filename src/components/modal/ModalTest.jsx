import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Modal } from 'antd'
import path from '@/constants/path.jsx'
import ReactPlayer from 'react-player'

const ModalTest = forwardRef((props, ref) => {
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

   const {myStream,remoteStream,sendStreams} = props




   return (
      <Modal
         footer={null}
         title={""}
         open={show}
         className={"call"}
         closable={false}
         width={"700px"}
         transitionName=""
         maskTransitionName=""
      >
         <div>
            <h1>Room Page</h1>
            {/*<h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>*/}
            {myStream && <button onClick={sendStreams}>Send Stream</button>}
            {/*{remoteSocketId && <button onClick={handleCallUser}>CALL</button>}*/}
            {myStream && (
               <>
                  <h1>My Stream</h1>
                  <ReactPlayer
                     playing
                     muted
                     height="100px"
                     width="200px"
                     url={myStream}
                  />
               </>
            )}
            {remoteStream && (
               <>
                  <h1>Remote Stream</h1>
                  <ReactPlayer
                     playing
                     muted
                     height="100px"
                     width="200px"
                     url={remoteStream}
                  />
               </>
            )}
         </div>

      </Modal>
   );
});

export default React.memo(ModalTest);