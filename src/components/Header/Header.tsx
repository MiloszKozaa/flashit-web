import { ReactNode } from 'react';
import { HeaderIcon, HeaderText } from './components';
import './Header.scss';

type HeaderType = {
  content?: ReactNode;
};

const Header = ({content }: HeaderType) => {
  return (
    <div className='FlashIt-Header'>
      {content}
    </div>
  );
};

Header.Icon = HeaderIcon;
Header.Text = HeaderText;

export default Header;
