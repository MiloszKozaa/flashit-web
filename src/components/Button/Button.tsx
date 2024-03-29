import './Button.scss';
import { ButtonColors } from '../../model/colors';
import { ReactNode } from 'react';
import { ButtonContent, ButtonIcon, ButtonText } from './components';

type ButtonType = {
  content?: ReactNode;
  onClick?: () => void;
  colorStyle: ButtonColors;
  maxWidth?: boolean;
};

const Button = ({ maxWidth, content, onClick, colorStyle }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`FlashIt-button-${colorStyle} ${
        maxWidth ? 'FlashIt-button-maxWidth' : ''
      }`}>
      {content}
    </button>
  );
};

Button.Content = ButtonContent;
Button.Icon = ButtonIcon;
Button.Text = ButtonText;

export default Button;
