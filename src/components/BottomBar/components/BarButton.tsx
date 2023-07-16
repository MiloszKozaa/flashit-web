import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './BarButton.scss';
import { useEffect } from 'react';

interface IBarButton {
  url: string;
  icon?: JSX.Element;
}

const BarButton = ({ icon, url }: IBarButton) => {
  const { pathname } = useResolvedPath(url);

  const isMath = useMatch({ path: pathname, end: true });

  useEffect(() => {
    console.log(url, !!isMath);
  }, []);

  return (
    <Link className={`BarButton${isMath ? '-active' : ''}`} to={url}>
      {icon}
    </Link>
  );
};

export default BarButton;
