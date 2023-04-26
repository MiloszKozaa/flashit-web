import { IPage } from '../../model/page';
import LandingPage from '../../page/LandingPage';
import LogInPage from '../../page/LogInPage';
import NotFoundPage from '../../page/NotFoundPage';
import RegisterPage from '../../page/RegisterPage';

export const publicPages: IPage[] = [
  {
    name: 'landingPage',
    url: '',
    component: <LandingPage />,
  },
  {
    name: 'login',
    url: 'login',
    component: <LogInPage />,
  },
  {
    name: 'register',
    url: 'register',
    component: <RegisterPage />,
  },
  {
    name: 'notFound',
    url: '*',
    component: <NotFoundPage />,
  },
];
