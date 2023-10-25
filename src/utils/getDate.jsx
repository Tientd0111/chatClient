export function getDate(isoDateString) {
   const dateObject = new Date(isoDateString)
   const hour = dateObject.getHours()
   const minutes = dateObject.getMinutes()
   const ampm = hour >= 12 ? 'PM' : 'AM'
   const formattedHours = hour % 12 === 0 ? 12 : hour % 12
   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

   return `${formattedHours}:${formattedMinutes} ${ampm}`
}
