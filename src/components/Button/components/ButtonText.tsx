import React, { ReactNode } from 'react';

type ButtonTextType = {
  text: string;
};

const ButtonText = ({ text }: ButtonTextType) => {
  return <div>{text}</div>;
};

export default ButtonText;
