import paths from '../constants/path.jsx'
import Login from '../pages/user/Login.jsx'
import Contact from '../pages/contact/Contact.jsx'
import Chat from '@/pages/chat/Chat'


const privateRoutes = [
   // chat
   {path: paths.CHAT, component: <Chat/> },
   //contact
   {path: paths.CONTACT, component: <Contact/> }
];

const routes = [{path: paths.LOGIN, component: <Login/>}];

export {routes, privateRoutes};

