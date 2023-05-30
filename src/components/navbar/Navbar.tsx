import { ColorPalette } from '../../model/colors';
import { getIconByName } from '../../services/icons/getIconByName';
import { privatePages } from '../../services/pages/privatePages';
import NavbarLink from './NavbarLink';
import './Navbar.css';

const Navbar = () => {
  const pages = privatePages.filter(privatePage => !!privatePage.icon);

  return (
    <div className='Navbar-wrapper'>
      {pages.map(({ url, icon }, key) => {
        return (
          <NavbarLink
            key={key}
            path={url}
            IconComponent={icon?.(ColorPalette.ACCESSORY)}
          />
        );
      })}
    </div>
  );
};

export default Navbar;
