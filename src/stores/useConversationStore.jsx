import {create} from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

const useConversationStore = create(set => ({
   getMyConversation: async (params) => {
      set({loadingGetMyConversation: true})
      try {
         const res = await callService(apis.getMyConversation.uri + params, "GET", {}, true)
         set({listConversation: res.conversation, loadingGetMyConversation: false})
      } catch (e) {
         set({loadingGetMyConversation: false})
      }
   },
   listConversation: [],
   loadingGetMyConversation: false,

   getMyConversationById: async (params) => {
      set({loadingGetMyConversationById: true})
      try {
         const res = await callService(apis.getConversationById.uri + params, "GET", {}, true)
         set({infoConversation: res.conversation, loadingGetMyConversationById: false})
      } catch (e) {
         set({loadingGetMyConversationById: false})
      }
   },
   infoConversation:{},
   loadingGetMyConversationById: false,
   setInfoConversation: (data) => {set({infoConversation: data})},

   createConversation: async (bodyParameters) => {
      set({loadingCreateConversation: true})
      try {
         return await callService(apis.createConversation.uri , "POST", bodyParameters, true)
      } catch (e) {
         set({loadingCreateConversation: false})
      }
   },
   loadingCreateConversation: false,
}));
export default useConversationStore;
