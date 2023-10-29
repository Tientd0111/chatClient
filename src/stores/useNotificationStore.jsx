import {create} from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

const useNotificationStore = create(set => ({
   getMyNoti: async () => {
      set({loadingGetMyNoti: true})
      try {
         return await callService(apis.my_noti.uri, "GET", {}, true)
      } catch (e) {
         set({loadingGetMyNoti: false})
      }
   },
   loadingGetMyNoti: false,

}));
export default useNotificationStore;
