import { useEffect, useState } from 'react';

const HomePage = () => {
  useEffect(() => {
    // const logIn = fetch('http://localhost:9002/user', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   credentials: 'include' as RequestCredentials,
    // });
    // const logIn = fetch('http://localhost:9002/user/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email: 'asdasd@tet.com', password: 'asdasd' }),
    //   credentials: 'include' as RequestCredentials,
    // });
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
