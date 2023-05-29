import { useEffect, useState } from 'react';
import EmailIcon from '../../assets/icons/EmailIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import WarningIcon from '../../assets/icons/WarningIcon';
import { ColorPalette } from '../../model/colors';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import FunctionalWrapper from '../FunctionalWrapper';
import { errorMonitor } from 'stream';
import LockIcon from '../../assets/icons/LockIcon';
import { getIconByName } from '../../services/icons/getIconByName';

type InputType = {
  type: string;
  id: string;
  placeholder: string;
  yup?: any;
  error?: any;
  IconComponent?: JSX.Element;
};

const Input = ({
  id,
  type,
  yup,
  placeholder,
  error,
  IconComponent,
}: InputType) => {
  const [color, setColor] = useState<string>(ColorPalette.ACCESSORY);

  const setColorByError = (error: any, secondColor: string) =>
    setColor(error ? ColorPalette.ERROR : secondColor);

  useEffect(() => {
    setColorByError(error, ColorPalette.ACCESSORY);
  }, [error]);

  return (
    <FunctionalWrapper style={{ border: `2px ${color} solid` }}>
      {getIconByName(id, color)}
      <input
        className='Input'
        style={{ color: ColorPalette.EMPTY }}
        type={type}
        id={id}
        placeholder={placeholder}
        {...yup}
        onFocus={() => setColorByError(error, ColorPalette.PRIMARY)}
        onBlur={() => setColorByError(error, ColorPalette.ACCESSORY)}
      />
      <WarningIcon
        color={error ? ColorPalette.ERROR : ColorPalette.BACKGROUND}
      />
    </FunctionalWrapper>
  );
};

export default Input;
