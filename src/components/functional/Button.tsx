import { Link, useNavigate } from 'react-router-dom';
import './Button.css';

type ButtonType = {
  path?: string;
  name: string;
  color: string;
  backgroundColor: string;
  IconComponent: JSX.Element;
  onButtonClick?: () => void;
};

const Button = ({
  path,
  name,
  color,
  backgroundColor,
  IconComponent,
  onButtonClick,
}: ButtonType) => {
  return (
    <button
      onClick={onButtonClick}
      style={{ backgroundColor: backgroundColor, color: color }}>
      {path ? (
        <Link to={path} style={{ color: color }}>
          <div className='Button-inner-wrapper'>
            <div className='Button-name'>{name}</div>
            {IconComponent}
          </div>
        </Link>
      ) : (
        <div className='Button-inner-wrapper'>
          <div className='Button-name'>{name}</div>
          {IconComponent}
        </div>
      )}
    </button>
  );
};

export default Button;
