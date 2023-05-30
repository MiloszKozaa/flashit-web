import { responseModel } from '../../model/responseModel';

export const callApi = async <TData>(
  endpoint: string,
  method: 'POST' | 'DELETE' | 'PATCH',
  body: any
) => {
  // const response = await fetch(`http://localhost:9002/${endpoint}`, {
    const response = await fetch(`https://flashit-server.vercel.app/${endpoint}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'include' as RequestCredentials,
  });

  const data = response.json();

  return data as unknown as responseModel<TData>;
};

export const getApi = async <TData>(endpoint: string) => {
  // const response = await fetch(`http://localhost:9002/${endpoint}`, {
    const response = await fetch(`https://flashit-server.vercel.app/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include' as RequestCredentials,
  });

  const data = response.json();

  return data as unknown as responseModel<TData>;
};
