import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './NavbarLink.css';
import { ColorPalette } from '../../model/colors';

type NavbarLinkType = {
  path: string;
  IconComponent?: (color: string) => JSX.Element;
};

const NavbarLink = ({ path, IconComponent }: NavbarLinkType) => {
  const resolvedPath = useResolvedPath(path);
  const isMatch = useMatch({ path: resolvedPath.pathname, end: true });
  const color = isMatch ? ColorPalette.PRIMARY : ColorPalette.ACCESSORY;

  return (
    <div className='NavbarLink-wrapper' style={{ borderColor: color }}>
      <Link to={path}>{IconComponent?.(color)}</Link>
    </div>
  );
};

export default NavbarLink;
