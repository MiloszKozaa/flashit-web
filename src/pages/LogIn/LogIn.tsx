import { useEffect, useState } from 'react';
import { Button, UserForm, Input } from '../../components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { callApi } from '../../services/api/callApi';
import { useNavigate } from 'react-router-dom';
import { setToastOnFetchError, toastOptions, yup } from '../../services';
import { IPublicForm } from '../../model/publicForm';
import { FiChevronRight, FiLock, FiMail } from 'react-icons/fi';
import { ButtonColors } from '../../model/colors';
import { toast } from 'react-toastify';

const LogIn = () => {
  const navigate = useNavigate();

  const { mutate, data, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: (body: IPublicForm) => callApi('user/login', 'POST', body),
    onError: errors => setToastOnFetchError(errors),
  });

  const [formError, setFormError] = useState<string>();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(yup.logIn),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    mutate({ email: data.email, password: data.password });
  };

  useEffect(() => {
    if (data) {
      if (!isLoading && data.status === 'success') {
        console.log('Navigating to home');
        navigate('/home');
      }
      if (!isLoading && data.status === 'error') {
        toast.error(data.message, toastOptions);
      }
    }
  }, [data]);

  return (
    <UserForm
      onSubmit={handleSubmit(onSubmit)}
      heder='Welcome back'
      description='We are glad to see you again, enter necessary fields to continue'
      link={{ name: `Don't have an account? Register`, path: 'register' }}
      buttonName='Log In'
      buttonStyle={ButtonColors.PRIMARY}
      isLoading={isLoading}>
      <Input
        type={'text'}
        id={'email'}
        placeholder={'email'}
        error={errors.email?.message}
        yup={{ ...register('email') }}
        icon={<FiMail />}
      />
      <Input
        type={'password'}
        id={'password'}
        placeholder={'password'}
        error={errors.password?.message}
        yup={{ ...register('password') }}
        icon={<FiLock />}
      />
    </UserForm>
  );
};

export default LogIn;
