import {create} from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

const useMessageStore = create(set => ({
   getListMessage: async (params) => {
      set({loadingGetListMessage: true})
      try {
         return await callService(apis.getListMessage.uri + params, "GET", {}, true)
      } catch (e) {
         set({loadingGetListMessage: false})
      }
   },
   loadingGetListMessage: false,

}));
export default useMessageStore;
