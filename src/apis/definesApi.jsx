const apis = {
   login: {
      uri: 'auth/login'
   },
   register:{
      uri: 'auth/register'
   },
   myInfo: {
      uri: 'auth/info'
   },
   getMyConversation:{
      uri: 'conversation/my-conversation/'
   },
   getConversationById:{
      uri: 'conversation/'
   },
   getListMessage:{
      uri: 'message/list-message/'
   },
   getListImage:{
      uri: 'message/list-image/'
   },
   get_friend:{
      uri: 'friend/getMyFriend'
   },
   get_friend_by_id:{
     uri: 'friend/'
   },
   my_noti:{
      uri: 'notification/my-notification'
   },
}
export default apis