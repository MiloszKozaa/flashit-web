import React, { ReactNode } from 'react';
import './ButtonText.scss';

type ButtonTextType = {
  text: string;
};

const ButtonText = ({ text }: ButtonTextType) => {
  return <div className='FlashIt-ButtonText'>{text}</div>;
};

export default ButtonText;
