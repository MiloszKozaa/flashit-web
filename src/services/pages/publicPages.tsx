import { IPage } from '../../model/page';
// import Landing from '../../pages/Landing/Landing';
// import LogIn from '../../pages/LogIn/LogIn';
// import Register from '../../pages/Register/Register';
import { Landing, LogIn, Register } from '../../pages';

const publicPages: IPage[] = [
  {
    name: 'landing',
    url: '',
    component: <Landing />,
  },
  {
    name: 'login',
    url: 'login',
    component: <LogIn />,
  },
  {
    name: 'register',
    url: 'register',
    component: <Register />,
  },
  // {
  //   name: 'notFound',
  //   url: '*',
  //   component: NotFoundPage,
  // },
];

export default publicPages;
