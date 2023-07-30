import { responseModel } from '../../model/responseModel';
import { getOptions } from './options/getOptions';

export const callApi = async <TData>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body: {} | null
) => {
  const response = await fetch(
    `${process.env.API_URL ?? 'http://localhost:9002/'}${endpoint}`,
    getOptions(method, body)
  );

  const data: responseModel<TData> = await response.json();


  return data;
};
