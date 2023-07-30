import React from 'react';

type HeaderTextType = {
  text: string;
  bold?: boolean;
};

const HeaderText = ({ text, bold }: HeaderTextType) => {
  return <div className={bold ? 'FlashIt-HeaderText-bold' : ''}>{text}</div>;
};

export default HeaderText;
