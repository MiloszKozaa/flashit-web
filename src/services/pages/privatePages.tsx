import { IPage } from '../../model/page';
import { FaHouse, FaGraduationCap, FaUserGroup, FaGear } from 'react-icons/fa6';
// import Home from '../../pages/Home/Home';
// import Decks from '../../pages/Decks/Decks';
// import Settings from '../../pages/Settings/Settings';
// import Friends from '../../pages/Friends/Friends';
import { Decks, Friends, Home, Settings } from '../../pages';

const privatePages: IPage[] = [
  {
    name: 'home',
    url: 'home',
    component: <Home />,
    isNavbarDisplayed: true,
    icon: <FaHouse />,
  },
  {
    name: 'decks',
    url: 'decks',
    component: <Decks />,
    isNavbarDisplayed: true,
    icon: <FaGraduationCap />,
  },
  {
    name: 'friends',
    url: 'friends',
    component: <Friends />,
    isNavbarDisplayed: true,
    icon: <FaUserGroup />,
  },
  {
    name: 'settings',
    url: 'settings',
    component: <Settings />,
    isNavbarDisplayed: true,
    icon: <FaGear />,
  },
];

export default privatePages;