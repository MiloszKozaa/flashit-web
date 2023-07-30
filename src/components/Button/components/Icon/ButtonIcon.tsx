import { ReactNode } from 'react';
import './ButtonIcon.scss';

type ButtonIconType = {
  icon: ReactNode;
};

const ButtonIcon = ({ icon }: ButtonIconType) => {
  return <div className='FlashIt-ButtonIcon'>{icon}</div>;
};

export default ButtonIcon;
