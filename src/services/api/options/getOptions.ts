export const getOptions = (
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body?: any
) => {
  if (method !== 'GET' && body) {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include' as RequestCredentials,
    };
  }
  if (method === 'GET' && !body) {
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include' as RequestCredentials,
    };
  }
  return {};
};
