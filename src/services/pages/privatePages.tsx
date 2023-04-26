import { IPage } from '../../model/page';
import HomePage from '../../page/HomePage';
import TestPage from '../../page/TestPage';

export const privatePages: IPage[] = [
    {
      name: 'home',
      url: 'home',
      component: <HomePage />,
    },
    {
      name: 'test',
      url: 'test',
      component: <TestPage />,
    },
  ];