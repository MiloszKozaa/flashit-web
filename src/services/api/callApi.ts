import { responseModel } from '../../model/responseModel';
import { getOptions } from './options/getOptions';

export const callApi = async <TData>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body: {} | null
) => {
  const response = await fetch(
    `${
      process.env.NODE_ENV === 'production'
        ? 'https://flashit-server.vercel.app/'
        : process.env.REACT_APP_DEV_API_URL
    }${endpoint}`,
    getOptions(method, body)
  );

  const data: responseModel<TData> = await response.json();

  return data;
};
