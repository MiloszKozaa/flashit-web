import * as yup from 'yup';

export const logIn = yup.object({
  email: yup
    .string()
    .required('Email is a required field')
    .email('Email is not valid'),
  password: yup.string().required('Password is a required field'),
});
