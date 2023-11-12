import {create} from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

const useStoriesStore = create(set => ({
   getListStoryById: async (param) => {
      set({loadingGetListStory: true})
      try {
         const res = await callService(apis.getStoryById.uri + param, "GET", {}, true)
         set({listStory: res.story, loadingGetListStory: false})
      } catch (e) {
         set({loadingGetListStory: false})
      }
   },
   listStory: [],
   loadingGetListStory: false,

   getNewStoryAll: async () => {
      set({loadingGetStoryNew: true})
      try {
         const res = await callService(apis.getStoryNew.uri, "GET", {}, true)
         set({listStoryNew: res.story, loadingGetStoryNew: false})
      } catch (e) {
         set({loadingGetStoryNew: false})
      }
   },
   listStoryNew: [],
   loadingGetStoryNew: false,

}));

export default useStoriesStore;
