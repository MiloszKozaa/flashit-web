import React from 'react';
import ErrorMessage from './ErrorMessage';
import './PublicForm.css';
import Button from '../functional/Button';
import { ColorPalette } from '../../model/colors';
import ArrowIcon from '../../assets/icons/ArrowIcon';

type PublicFormType = {
  onSubmit: () => void;
  error?: string;
  children: React.ReactNode;
  heder: string;
  description: string;
};

const PublicForm = ({
  onSubmit,
  error,
  children,
  heder,
  description,
}: PublicFormType) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='PublicForm-wrapper'>
        {!error ? (
          <>
            <div className='PublicForm-main'>{heder}</div>
            <div className='PublicForm-describe'>{description}</div>
          </>
        ) : (
          <ErrorMessage error={error} />
        )}
        {children}
      </div>
    </form>
  );
};

export default PublicForm;
