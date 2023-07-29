import { callApi } from './api/callApi';
import { logIn } from './yup/logIn';
import { register } from './yup/register';
import privatePages from './pages/privatePages';
import publicPages from './pages/publicPages';
import { toastOptions } from './toast/options';
import { goTo } from './navigation/goToPage';
import { setToastOnFetchError } from './toast/sendToastOnFetchError';

const yup = { logIn, register };

export { yup, callApi, privatePages, publicPages, toastOptions, goTo, setToastOnFetchError };
