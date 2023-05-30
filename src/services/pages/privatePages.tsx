import DecksIcon from '../../assets/icons/DecksIcon';
import FriendsIcon from '../../assets/icons/FriendsIcon';
import HomeIcon from '../../assets/icons/HomeIcon';
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
    icon: color => <HomeIcon color={color} />,
    isNavbarDisplayed: true,
  },
  {
    name: 'decks',
    url: 'decks',
    component: <DecksPage />,
    icon: color => <DecksIcon color={color} />,
    isNavbarDisplayed: true,
  },
  {
    name: 'friends',
    url: 'friends',
    component: <FriendsPage />,
    icon: color => <FriendsIcon color={color} />,
    isNavbarDisplayed: true,
  },
  {
    name: 'settings',
    url: 'settings',
    component: <SettingsPage />,
    icon: color => <HomeIcon color={color} />,
    isNavbarDisplayed: true,
  },
  {
    name: 'test',
    url: 'test',
    component: <TestPage />,
  },
];
