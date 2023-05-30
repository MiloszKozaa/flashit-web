import { ColorPalette } from '../../model/colors';
import { getIconByName } from '../../services/icons/getIconByName';
import { privatePages } from '../../services/pages/privatePages';
import NavbarLink from './NavbarLink';
import './Navbar.css';
import { useResolvedPath } from 'react-router-dom';

const Navbar = () => {
  const pages = privatePages.filter(privatePage => !!privatePage.icon);

  return (
    <div
      className='Navbar-wrapper'
      style={{ background: ColorPalette.BACKGROUND }}>
      {pages.map(({ url, icon }, key) => {
        return <NavbarLink key={key} path={`/${url}`} IconComponent={icon} />;
      })}
    </div>
  );
};

export default Navbar;
