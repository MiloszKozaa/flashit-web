import Button from '../../components/Button';
import PublicPagePattern from '../../components/PublicPagePattern';
import { ColorPalette } from '../../model/colors';
import './Landing.css';

const LandingPage = () => {
  return (
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
      />
      <Button
        path='/login'
        name='Log In'
        color={ColorPalette.EMPTY}
        backgroundColor={ColorPalette.PRIMARY}
      />
      <PublicPagePattern type='TOP' color={ColorPalette.PRIMARY} />
      <PublicPagePattern type='BOTTOM' color={ColorPalette.PRIMARY} />
    </div>
  );
};

export default LandingPage;
