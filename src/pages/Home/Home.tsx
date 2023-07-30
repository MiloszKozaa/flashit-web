import { useQuery } from 'react-query';

import { callApi, setToastOnFetchError } from '../../services';
import { IUser } from '../../model/user';
import toast from 'react-hot-toast';

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user-data'],
    queryFn: () => callApi<IUser>('user', 'GET', null),
    onError: error => setToastOnFetchError(error),
  });

  if (isLoading) return <div className=''>Loading...</div>;

  if (!isLoading && data && data.status === 'error')
    return <div className=''>{data.message}</div>;

  return <div className='Home-wrapper'>Home Page welcomen</div>;
};

export default Home;
