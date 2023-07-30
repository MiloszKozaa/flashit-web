import { useEffect, useState } from 'react';
import { Button } from '../../components';
// import Input from '../../components/functional/Input';
import { UserForm, Input } from '../../components';
import { ColorPalette, ButtonColors } from '../../model/colors';
import {
  yup,
  callApi,
  toastOptions,
  setToastOnFetchError,
} from '../../services';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { IPublicForm } from '../../model/publicForm';
import { FiChevronRight, FiLock, FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react';
import { animations } from '../../assets';

const Register = () => {
  const navigate = useNavigate();

  const { mutate, data, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: (body: IPublicForm) => callApi('user/', 'POST', body),
    onError: errors => setToastOnFetchError(errors),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(yup.register),
  });

  const onSubmit = (data: any) => {
    if (!isLoading) {
      mutate({ email: data.email, password: data.password });
    }
  };

  useEffect(() => {
    if (data) {
      if (!isLoading && data.status === 'success') {
        console.log('Navigating to log in');
        toast.success('Your account have been created', toastOptions);
        navigate('/login');
      }
      if (!isLoading && data.status === 'error') {
        console.log(data.message);
        toast.error(data.message, toastOptions);
      }
    }
  }, [data]);

  return (
    <UserForm
      onSubmit={handleSubmit(onSubmit)}
      heder='Hello'
      description='We need some informations to create your new account'
      buttonName='Create account'
      buttonStyle={ButtonColors.DEFAULT}
      isLoading={isLoading}
      link={{ name: 'Have an account? Log In', path: 'login' }}>
      <Input
        type={'email'}
        id={'email'}
        placeholder={'email'}
        error={errors.email?.message}
        yup={{ ...register('email') }}
        icon={<FiMail />}
      />
      <Input
        type={'password'}
        id={'password'}
        placeholder={'min 6 characters'}
        error={errors.password?.message}
        yup={{ ...register('password') }}
        icon={<FiLock />}
      />
      <Input
        type={'password'}
        id={'confirmPassword'}
        placeholder={'confirm password'}
        error={errors.confirmPassword?.message}
        yup={{ ...register('confirmPassword') }}
        icon={<FiLock />}
      />
    </UserForm>
  );
};

export default Register;
