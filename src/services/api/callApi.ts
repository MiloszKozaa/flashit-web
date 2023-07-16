import { responseModel } from '../../model/responseModel';
import { getOptions } from './options/getOptions';

// type CallType = {
//   endpoint: string;
// } & (
//   | {
//       method: 'POST' | 'DELETE' | 'PATCH';
//       body: any;
//     }
//   | {
//       method: 'GET';
//     }
// );

export const callApi = async <TData>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body: {} | null
) => {
  const response = await fetch(
    `https://flashit-server.vercel.app/${endpoint}`,
    getOptions(method, body)
  );
  // const response = await fetch(
  //   `http://localhost:9002/${endpoint}`,
  //   getOptions(method, body)
  // );

  const data: responseModel<TData> = await response.json();

  return data;
};

// export const getApi = async <TData>(endpoint: string) => {
//   // const response = await fetch(`https://flashit-server.vercel.app/${endpoint}`, {
//   const response = await fetch(`http://localhost:9002/${endpoint}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include' as RequestCredentials,
//   });

//   const data = response.json();

//   return data as unknown as responseModel<TData>;
// };
