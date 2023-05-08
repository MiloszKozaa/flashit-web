import { useEffect, useState } from 'react';
import EmailIcon from '../../assets/icons/EmailIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import WarningIcon from '../../assets/icons/WarningIcon';
import { ColorPalette } from '../../model/colors';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import FunctionalWrapper from '../FunctionalWrapper';

type InputType = {
  type: string;
  id: string;
  placeholder: string;
  yup?: any;
  error?: any;
  IconComponent?: JSX.Element;
};

const inputIcon = (id: string, color: string) => {
  switch (id) {
    case 'email':
      return <EmailIcon color={color} />;

    default:
      return <SearchIcon color={color} />;
  }
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
      {inputIcon(id, color)}
      <input
        className='Input'
        style={{ color: ColorPalette.EMPTY }}
        type={type}
        id={id}
        placeholder={placeholder}
        onFocus={() => setColorByError(error, ColorPalette.PRIMARY)}
        onBlur={() => setColorByError(error, ColorPalette.ACCESSORY)}
        {...yup}
      />
      <WarningIcon
        color={error ? ColorPalette.ERROR : ColorPalette.BACKGROUND}
      />
    </FunctionalWrapper>
  );
};

export default Input;
