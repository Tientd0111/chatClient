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
   createConversation:{
      uri: 'conversation/create'
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

   getStoryById:{
     uri: 'story/get-story-by-id/'
   },
   getStoryNew:{
     uri: 'story/get-all-story'
   },
}
export default apis