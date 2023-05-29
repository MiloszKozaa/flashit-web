import { IPage } from '../../model/page';
import DecksPage from '../../page/DecksPage';
import FriendsPage from '../../page/FriendsPage';
import HomePage from '../../page/HomePage';
import SettingsPage from '../../page/SettingsPage';
import TestPage from '../../page/TestPage';

export const privatePages: IPage[] = [
  {
    name: 'home',
    url: 'home',
    component: <HomePage />,
    isDisplayedOnNavbar: true,
  },
  {
    name: 'decks',
    url: 'decks',
    component: <DecksPage />,
    isDisplayedOnNavbar: true,
  },
  {
    name: 'friends',
    url: 'friends',
    component: <FriendsPage />,
    isDisplayedOnNavbar: true,
  },
  {
    name: 'settings',
    url: 'settings',
    component: <SettingsPage />,
    isDisplayedOnNavbar: true,
  },
  {
    name: 'test',
    url: 'test',
    component: <TestPage />,
  },
];
