import { toast } from 'react-toastify';
import { toastOptions } from '..';

export const setToastOnFetchError = (errors: unknown) => {
  console.error(errors);
  toast.error('We have some troubles. Try again later.', toastOptions);
};
