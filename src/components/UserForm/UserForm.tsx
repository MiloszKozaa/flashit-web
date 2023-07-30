import React from 'react';
import './UserForm.scss';
import FormLink from './components/FormLink';
import { Button, Spinner } from '..';
import { FiChevronRight } from 'react-icons/fi';
import { ButtonColors } from '../../model/colors';
import { ToastContainer } from 'react-toastify';

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
        colorStyle={buttonStyle}
        maxWidth={!isLoading}
        content={
          !isLoading ? (
            <Button.Content>
              <Button.Text text={buttonName} />
              <Button.Icon icon={<FiChevronRight />} />
            </Button.Content>
          ) : (
            <Button.Icon icon={<Spinner colorStyle={buttonStyle} />} />
          )
        }
      />
      <FormLink text={link.name} path={link.path} />
    </form>
  );
};

export default UserForm;
