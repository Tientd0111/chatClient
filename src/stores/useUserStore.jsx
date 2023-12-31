import {create} from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";
import { message } from 'antd'
import axios from 'axios'

const useUserStore = create(set => ({
   login: async (bodyParameters) => {
      try {
         const ip = await axios.get('https://api.ipify.org/')
         bodyParameters.ip = ip.data
         set({loadingLogin: true})
         const response = await callService(apis.login.uri, 'POST', bodyParameters)
         message.success(response?.msg)
         set({user: response.user, loadingLogin: false});
         localStorage.setItem('key', response.accessToken)
         localStorage.setItem('user', JSON.stringify(response.user))
         // cookies.set('refreshToken', response.refreshToken, { path: '/' });
         return {isAuth: true, user: response.user, access_token: response.accessToken}
      } catch (e) {
         message.error(e.response?.data.msg)
         set({loadingLogin: false})
         return {isAuth: false}
      }
   },
   loadingLogin: false,
   user: {},
   access_token: {},

   getMyInfo: async () => {
      set({loadingGetMyInfo: true})
      try {
         const res = await callService(apis.myInfo.uri, 'GET', {},true)
         set({info: res.user,loadingGetMyInfo: false})
      }catch (e) {
         set({loadingGetMyInfo: false})
      }
   },
   loadingGetMyInfo: false,
   info:{},

   location: {},
   setLocation: (data) => {set({location: data})},
}));
export default useUserStore;
