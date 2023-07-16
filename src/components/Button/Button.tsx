import { Link } from 'react-router-dom';
import './Button.scss';
import ButtonContent from './components/ButtonContent';
import { Spinner } from '..';
import { ButtonColors } from '../../model/colors';

type ButtonType = {
  name?: string;
  icon: JSX.Element;
  onClick?: () => void;
  style: ButtonColors;
  isOpposite?: boolean;
  isLoading?: boolean;
};

const Button = ({
  name,
  icon,
  onClick,
  style,
  isOpposite,
  isLoading,
}: ButtonType) => {
  if (isLoading) {
    return (
      <button className={`FlashIt-button-icon FlashIt-button-${style}`}>
        <Spinner colorStyle={style} />
      </button>
    );
  }

  return (
    <button
      onClick={!isLoading && onClick}
      className={`FlashIt-button-${
        name ? 'named' : 'icon'
      } FlashIt-button-${style}`}>
      {isOpposite && icon}
      {name}
      {!isOpposite && icon}
    </button>
  );
};

export default Button;
