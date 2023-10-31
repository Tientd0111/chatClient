import axios from 'axios';
import {definesApi, environmentConfig, responseStatus} from '../apis';
import { message } from 'antd'

export async function callService(uri, method, bodyParameters, hasToken) {
   let url = `${environmentConfig.API_ENVIRONMENT_URL}${uri}`;
   try {
      let authen_token
      if (hasToken) {
         authen_token = localStorage.getItem('key');
      }
      let headers = !hasToken ? { 'Content-Type': 'application/json;charset=UTF-8',"ngrok-skip-browser-warning":true } : { 'Content-Type': 'application/json;charset=UTF-8', Authorization: `Bearer ${authen_token}`,"ngrok-skip-browser-warning":true }
      let configAxios
      configAxios = {
         url,
         method,
         headers,
         data: bodyParameters,
         timeout: environmentConfig.TIME_OUT
      }

      return new Promise((resolve, reject) => {
         axios(configAxios)
            .then((response) => {
               if (response.status === responseStatus.SUCCESS && response.data === '') {
                  return handleResponseSuccess({ status: 200, data: { statusRequest: 200 } }, resolve);
               }
               return handleResponseSuccess(response, resolve);
            }).catch((error) => {
            const res = error.response
            // if(res?.status === 401) {
            //    if(res.data.msg === 'Token not verified!' && res.data.status === 401) {
            //       let newConfig = {
            //          url: environmentConfig.API_ENVIRONMENT_URL + definesApi.refresh_token.uri,
            //          method: 'POST',
            //          headers: { 'Content-Type': 'application/json;charset=UTF-8', Authorization: `Bearer ${localStorage.getItem('key')}` },
            //          // data: {refreshToken: cookies.get('refreshToken')}
            //       }
            //       axios(newConfig)
            //          .then((res)=>{
            //             localStorage.setItem('key', res.data.accessToken)
            //             callService(uri, method, bodyParameters, hasToken)
            //          })
            //          .catch((err)=>{
            //             message.error('Vui lòng đăng nhập lại')
            //          })
            //    }
            // }
            return handleResponseFail(error, reject);
         });
      });
   } catch (error) {
      console.log('Error :' + error);
   }
}

const handleResponseSuccess = (response, resolve) => {
   switch (response.status) {
      case responseStatus.SUCCESS:
         return resolve(response.data)
      default:
         break;
   }
}

const handleResponseFail = (error, reject) => {
   const status = error.response ? error.response.status : error.status
   switch (status) {
      case responseStatus.TOKEN_EXPRIRED:
      case responseStatus.NOT_CONNECT:
      case responseStatus.FILE_NOT_FOUND:
      case responseStatus.REQUEST_TIMEOUT:
         return reject(error)
      default:
         return reject(error)
   }
}