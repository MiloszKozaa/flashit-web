import { Button } from '../../components';
import { FiChevronRight } from 'react-icons/fi';
import { ButtonColors } from '../../model/colors';
import './Landing.scss';
import '../../styles/page.scss';
import { useNavigate } from 'react-router-dom';
import { goTo } from '../../services';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className='FlashIt-page-center-wrapper'>
      <div className='Landing-header'>
        <div className='text'>Welcome</div>
        <div className='text'>to</div>
        <div className='logo'>Flash It</div>
      </div>
      <div className='Landing-buttons'>
        <Button
          name='Create account'
          icon={<FiChevronRight />}
          style={ButtonColors.DEFAULT}
          onClick={() => goTo(navigate, 'register')}
        />
        <Button
          name='Log In'
          icon={<FiChevronRight />}
          style={ButtonColors.PRIMARY}
          onClick={() => goTo(navigate, 'login')}
        />
      </div>
    </div>
  );
};

export default Landing;
