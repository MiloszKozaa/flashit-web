import TestWidthComponent from '../../components/TestWidthComponent';
import Button from '../../components/functional/Button';
import { getIconByName } from '../../services/icons/getIconByName';
import './Home.css';

const Home = () => {
  return (
    <div className='Home-wrapper'>
      Home Page welcomen
      <Button
        name='test'
        color='#fff'
        backgroundColor='#111'
        IconComponent={getIconByName('home', '#fff')}
      />
    </div>
  );
};

export default Home;
