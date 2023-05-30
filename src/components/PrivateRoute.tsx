import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../model/user';
import { getApi } from '../services/api/callApi';
import { useEffect } from 'react';
import Navbar from './navbar/Navbar';

interface IPrivateRoute {
  PrivateComponent: JSX.Element;
  isNavbarDisplayed: boolean;
}

const PrivateRoute = ({
  PrivateComponent,
  isNavbarDisplayed,
}: IPrivateRoute) => {
  const navigate = useNavigate();

  const { data, status } = useQuery({
    queryKey: ['user-data'],
    queryFn: () => getApi<IUser>('user/login'),
  });

  useEffect(() => {
    if (status === 'success' && data.status === 401) {
      console.error(
        'It is a private router. Please login or create new account!'
      );
      navigate('/login');
    }
  }, [data]);

  return (
    <>
      {isNavbarDisplayed && <Navbar />}
      {PrivateComponent}
    </>
  );
};

export default PrivateRoute;
