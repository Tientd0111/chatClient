export const checkAuth = () => {
   const user = JSON.parse(localStorage.getItem('user'))
   if (user?.data_user?.email === undefined) {
      return false
   } else {
      return true
   }
}
