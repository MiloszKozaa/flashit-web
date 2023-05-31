import { ColorPalette } from '../../model/colors';
import { privatePages } from '../../services/pages/privatePages';
import NavbarLink from './NavbarLink';
import './Navbar.css';

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
