import React, { ReactNode } from 'react';

import './HeaderIcon.scss'

type HeaderIconType = {
  icon: ReactNode;
};

const HeaderIcon = ({ icon }: HeaderIconType) => {
  return <div className='FlashIt-HeaderIcon'>{icon}</div>;
};

export default HeaderIcon;
