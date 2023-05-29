import { ColorPalette } from '../../model/colors';
import { getIconByName } from '../../services/icons/getIconByName';
import { privatePages } from '../../services/pages/privatePages';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  const pages = privatePages.filter(
    privatePage => !!privatePage.isDisplayedOnNavbar
  );

  return (
    <div className='Navbar-wrapper'>
      {pages.map(({ url, name }, key) => (
        <NavbarLink
          key={key}
          path={url}
          IconComponent={getIconByName(name, ColorPalette.ACCESSORY)}
        />
      ))}
    </div>
  );
};

export default Navbar;
