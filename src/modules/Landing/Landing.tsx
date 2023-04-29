import Button from '../../components/functional/Button';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import { ColorPalette } from '../../model/colors';
import './Landing.css';
import FlashItPublicPattern from '../../components/FlashItPublicPattern';

const LandingPage = () => {
  return (
    <FlashItPublicPattern color={ColorPalette.PRIMARY}>
      <div className='Landing-wrapper'>
        <div className='Landing-header'>
          <div className='Landing-header-text'>Welcome</div>
          <div className='Landing-header-text'>to</div>
          <div className='Landing-header-logo'>Flash It</div>
        </div>
        <Button
          path='/register'
          name='Create account'
          color={ColorPalette.PRIMARY}
          backgroundColor={ColorPalette.EMPTY}
          IconComponent={<ArrowIcon color={ColorPalette.PRIMARY} />}
        />
        <Button
          path='/login'
          name='Log In'
          color={ColorPalette.EMPTY}
          backgroundColor={ColorPalette.PRIMARY}
          IconComponent={<ArrowIcon color={ColorPalette.EMPTY} />}
        />
      </div>
    </FlashItPublicPattern>
  );
};

export default LandingPage;
