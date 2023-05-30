import { Link } from 'react-router-dom';
import './NavbarLink.css';

type NavbarLinkType = {
  path: string;
  IconComponent?: JSX.Element;
};

const NavbarLink = ({ path, IconComponent }: NavbarLinkType) => {
  return (
    <div className='NavbarLink-wrapper'>
      <Link to={`/${path}`}>{IconComponent}</Link>
    </div>
  );
};

export default NavbarLink;
