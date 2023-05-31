import { useEffect, useState } from 'react';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import Button from '../../components/functional/Button';
import Input from '../../components/functional/Input';
import ErrorMessage from '../../components/form/ErrorMessage';
import { ColorPalette } from '../../model/colors';
import LinkToForm from '../../components/form/LinkToForm';
import { yupRegister } from '../../services/yup/register';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { callApi } from '../../services/api/callApi';
import { useNavigate } from 'react-router-dom';
import { yupLogIn } from '../../services/yup/logIn';
import { IPublicForm } from '../../model/publicForm';
import PublicForm from '../../components/form/PublicForm';

const LogIn = () => {
  const navigate = useNavigate();

  const { mutate, data, status } = useMutation({
    mutationKey: ['user'],
    mutationFn: (body: IPublicForm) => callApi('user/login', 'POST', body),
  });

  const [formError, setFormError] = useState<string>();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(yupLogIn),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    mutate({ email: data.email, password: data.password });
  };

  useEffect(() => {
    if (data) {
      if (status === 'success' && data.status === 200) {
        console.log('Navigating to home');
        navigate('/home');
      }
      setFormError(data.error);
    }
  }, [data]);

  return (
    <PublicForm
      onSubmit={handleSubmit(onSubmit)}
      error={formError}
      heder='Welcome back'
      description='We are glad to see you again, enter necessary fields to continue'>
      <Input
        type={'text'}
        id={'email'}
        placeholder={'email'}
        error={errors.email?.message}
        yup={{ ...register('email') }}
      />
      <Input
        type={'password'}
        id={'password'}
        placeholder={'password'}
        error={errors.password?.message}
        yup={{ ...register('password') }}
      />
      <Button
        name='Log In'
        color={ColorPalette.EMPTY}
        backgroundColor={ColorPalette.PRIMARY}
        IconComponent={<ArrowIcon color={ColorPalette.EMPTY} />}
      />
      <LinkToForm
        text={`Don't have an account? Register`}
        path='register'
      />
    </PublicForm>
  );
};

export default LogIn;
