import React, { ReactNode } from 'react';
import './ButtonContent.scss';

type ButtonContentType = {
  children: ReactNode;
};

const ButtonContent = ({ children }: ButtonContentType) => {
  return <div className='FlashIt-ButtonContent'>{children}</div>;
};

export default ButtonContent;
