import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../model/user';
import { callApi } from '../../services/api/callApi';
import { useEffect } from 'react';
import { BottomBar } from '../';

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
    queryFn: () => callApi<IUser>('user/login', 'GET', null),
  });

  useEffect(() => {
    if (status === 'success' && data.status === 'error') {
      console.error(
        'It is a private router. Please login or create new account!'
      );
      navigate('/login');
    }
  }, [data]);

  return (
    <>
      {isNavbarDisplayed && <BottomBar />}
      {PrivateComponent}
    </>
  );
};

export default PrivateRoute;
