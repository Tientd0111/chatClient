import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Modal } from 'antd'
import useFriendStore from '@/stores/useFriendStore.jsx'
import environmentConfig from '@/apis/environmentConfig.jsx'

let mTimeOut = -1
const ModalFriend= forwardRef((props, ref) => {
   const [show,setShow] = useState(false)
   const [name,setName] = useState()

   const {handleCreateConversation} = props
   const cancel = () => {
      setShow(false)
   }
   useImperativeHandle(ref, () => ({
      open: () => setShow(true),
      close: () => {
         setShow(false)
      }
   }));

   const {getListFriend,listFriend} = useFriendStore(state => ({
      getListFriend: state.getListFriend,
      listFriend: state.listFriend
   }))
   useEffect(() => {
      getListFriend(name)
   },[name])

   const onchange = (data) => {
      clearTimeout(mTimeOut)
      mTimeOut = setTimeout(()=> {
         setName(data?.target?.value)
      },300)
   };


   return (
      <Modal
         footer={null}
         title={""}
         open={show}
         closable={false}
         className={""}
         width={"320px"}
         // transitionName=""
         // maskTransitionName=""
      >
         <div className="modal-body">
            <h4 className="pb-2">Search by Name</h4>
            <div className="form-group">
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
                     onChange={onchange}
                     type="text"
                     className="form-control form-control-solid"
                     id="search-contact"
                     placeholder="Search contact"
                  />
               </div>
            </div>
            <ul className="tyn-media-list gap gap-3 pt-4">
               {listFriend.map((item)=>(
                  <li key={item?._id}>
                     <div className="tyn-media-group" onClick={()=>handleCreateConversation(item?.user?._id)}>
                        <div className="tyn-media">
                           <img src={environmentConfig.BASE_URI + item?.user?.avatar} alt="" />
                        </div>
                        <div className="tyn-media-col">
                           <div className="tyn-media-row">
                              <h6 className="name">{item?.user?.name}</h6>
                           </div>
                           <div className="tyn-media-row">
                              <p className="content">{item?.user?.nickname ? `@${item?.user?.nickname}`:""}</p>
                           </div>
                        </div>
                        {/* .tyn-media-option-list */}
                     </div>
                     {/* .tyn-media-group */}
                  </li>
               ))}
            </ul>
            {/* .tyn-media-list */}
         </div>

      </Modal>
   );
});

export default React.memo(ModalFriend);