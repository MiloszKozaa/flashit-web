import React from 'react';
import './UserForm.scss';
import FormLink from './components/FormLink';
import { Button } from '..';
import { FiChevronRight } from 'react-icons/fi';
import { ButtonColors } from '../../model/colors';

interface IUserForm {
  onSubmit: () => void;
  children: React.ReactNode;
  heder: string;
  description: string;
  link: { name: string; path: string };
  isLoading: boolean;
  buttonName: string;
  buttonStyle: ButtonColors;
}

const UserForm = ({
  onSubmit,
  children,
  heder,
  description,
  link,
  buttonName,
  isLoading,
  buttonStyle,
}: IUserForm) => {
  return (
    <form onSubmit={onSubmit} className='UserForm'>
      <div className='header'>{heder}</div>
      <div className='describe'>{description}</div>
      {children}
      <Button
        name={buttonName}
        icon={<FiChevronRight />}
        style={buttonStyle}
        isLoading={isLoading}
      />
      <FormLink text={link.name} path={link.path} />
    </form>
  );
};

export default UserForm;
