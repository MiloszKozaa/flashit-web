import { useState } from 'react';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import EmailIcon from '../../assets/icons/EmailIcon';
import FlashItPublicPattern from '../../components/FlashItPublicPattern';
import Button from '../../components/functional/Button';
import Input from '../../components/functional/Input';
import ErrorMessage from '../../components/warining/ErrorMessage';
import { ColorPalette } from '../../model/colors';
import './Register.css';

const Register = () => {
  const [error, setError] = useState<string>();

  return (
    <FlashItPublicPattern color={ColorPalette.PRIMARY}>
      <div className='Register-wrapper'>
        {!error ? (
          <>
            <div className='Register-main'>Hello</div>
            <div className='Register-describe'>
              We need some informations to create your new account
            </div>
          </>
        ) : (
          <ErrorMessage error={error} />
        )}
        <Input type={'text'} id={'email'} placeholder={'email'} error={''} />
        <Input type={'text'} id={'email'} placeholder={'password'} error={''} />
        <Input
          type={'text'}
          id={'email'}
          placeholder={'confirm password'}
          error={''}
        />
        <Button
          path='/login'
          name='Create account'
          color={ColorPalette.PRIMARY}
          backgroundColor={ColorPalette.EMPTY}
          IconComponent={<ArrowIcon color={ColorPalette.PRIMARY} />}
        />
      </div>
    </FlashItPublicPattern>
  );
};

export default Register;
