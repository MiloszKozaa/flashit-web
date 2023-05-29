import DecksIcon from '../../assets/icons/DecksIcon';
import EmailIcon from '../../assets/icons/EmailIcon';
import FriendsIcon from '../../assets/icons/FriendsIcon';
import HomeIcon from '../../assets/icons/HomeIcon';
import LockIcon from '../../assets/icons/LockIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';

export const getIconByName = (id: string, color: string) => {
  switch (id) {
    case 'email':
      return <EmailIcon color={color} />;

    case 'home':
      return <HomeIcon color={color} />;

    case 'friends':
      return <FriendsIcon color={color} />;

    case 'settings':
      return <SettingsIcon color={color} />;

    case 'decks':
      return <DecksIcon color={color} />;

    case 'confirmPassword':
    case 'password':
      return <LockIcon color={color} />;

    default:
      return <SearchIcon color={color} />;
  }
};
