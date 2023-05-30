import FunctionalWrapper from '../FunctionalWrapper';
import { ColorPalette } from '../../model/colors';
import WarningIcon from '../../assets/icons/WarningIcon';

type ErrorMessageType = {
  error: string;
};

const ErrorMessage = ({ error }: ErrorMessageType) => {
  return (
    <FunctionalWrapper
      style={{
        border: `2px ${ColorPalette.ERROR} solid`,
        backgroundColor: 'rgba(254, 66, 60, 0.2)',
        gap: '20px',
        alignItems: 'center',
      }}>
      <div style={{ width: '100%' }}>{error}</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <WarningIcon color={ColorPalette.ERROR} />
      </div>
    </FunctionalWrapper>
  );
};

export default ErrorMessage;
