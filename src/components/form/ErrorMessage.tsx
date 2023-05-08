import FunctionalWrapper from '../FunctionalWrapper';
import { ColorPalette } from '../../model/colors';
import WarningIcon from '../../assets/icons/WarningIcon';

type ErrorMessageType = {
  error: string;
};

const ErrorMessage = ({ error }: ErrorMessageType) => {
  return (
    <FunctionalWrapper style={{ border: `2px ${ColorPalette.ERROR} solid` }}>
      {error}
      <WarningIcon color={ColorPalette.ERROR} />
    </FunctionalWrapper>
  );
};

export default ErrorMessage;
