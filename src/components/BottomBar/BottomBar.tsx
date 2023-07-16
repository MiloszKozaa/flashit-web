import './BottomBar.scss';
import { IPage } from '../../model/page';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import BarButton from './components/BarButton';
import { privatePages } from '../../services';

const BottomBar = () => {
  const pages: IPage[] = privatePages.filter(privatePage => !!privatePage.icon);

  return (
    <div className='BottomBar'>
      {pages.map(({ url, icon }, key) => (
        <BarButton key={key} url={`/${url}`} icon={icon} />
      ))}
    </div>
  );
};

export default BottomBar;
