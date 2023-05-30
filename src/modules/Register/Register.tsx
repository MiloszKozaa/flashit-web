import { useEffect, useState } from 'react';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import EmailIcon from '../../assets/icons/EmailIcon';
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
import PublicForm from '../../components/form/PublicForm';
import { IPublicForm } from '../../model/publicForm';

const Register = () => {
  const navigate = useNavigate();

  const { mutate, data, status } = useMutation({
    mutationKey: ['user'],
    mutationFn: (body: IPublicForm) => callApi('user/', 'POST', body),
  });

  const [formError, setFormError] = useState<string>();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(yupRegister),
  });

  const onSubmit = (data: any) => {
    mutate({ email: data.email, password: data.password });
  };

  useEffect(() => {
    if (data) {
      if (status === 'success' && data.status === 200) {
        console.log('Navigating to log in');
        navigate('/login');
      }
      setFormError(data.error);
    }
  }, [data]);

  return (
    <PublicForm
      onSubmit={handleSubmit(onSubmit)}
      error={formError}
      heder='Hello'
      description='We need some informations to create your new account'>
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
        placeholder={'min 6 characters'}
        error={errors.password?.message}
        yup={{ ...register('password') }}
      />
      <Input
        type={'password'}
        id={'confirmPassword'}
        placeholder={'confirm password'}
        error={errors.confirmPassword?.message}
        yup={{ ...register('confirmPassword') }}
      />
      <Button
        name='Create account'
        color={ColorPalette.PRIMARY}
        backgroundColor={ColorPalette.EMPTY}
        IconComponent={<ArrowIcon color={ColorPalette.PRIMARY} />}
      />
      {/* <LinkToForm
        text='Have an account?'
        link='Log In'
        path='login'
        color={ColorPalette.PRIMARY}
      /> */}
    </PublicForm>
  );
};

export default Register;
