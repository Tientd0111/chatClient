import paths from '../constants/path.jsx'
import Login from '../pages/user/Login.jsx'
import Contact from '../pages/contact/Contact.jsx'
import Home from '../pages/chat/Home.jsx'


const privateRoutes = [
   // chat
   {path: paths.CHAT, component: <Home/> },
   //contact
   {path: paths.CONTACT, component: <Contact/> }
];

const routes = [{path: paths.LOGIN, component: <Login/>}];

export {routes, privateRoutes};

