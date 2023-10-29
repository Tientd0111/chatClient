import {create} from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

const useFriendStore = create(set => ({
   getListFriend: async () => {
      set({loadingGetListFriend: true})
      try {
         const res = await callService(apis.get_friend.uri, "GET", {}, true)
         set({listFriend: res.friend, loadingGetListFriend: false})
      } catch (e) {
         set({loadingGetListFriend: false})
      }
   },
   listFriend: [],
   loadingGetListFriend: false,

   getById: async (params) => {
      set({loadingGetById: true})
      try {
         return await callService(apis.get_friend_by_id.uri + params, "GET", {}, true)
      } catch (e) {
         set({loadingGetById: false})
      }
   },
   loadingGetById: false,

}));
export default useFriendStore;
