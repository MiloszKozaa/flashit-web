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
  const navigate = useNavigate();

  return (
    <button onClick={onButtonClick}>
      {path ? (
        <div
          className='Button-wrapper'
          style={{ backgroundColor: backgroundColor, color: color }}>
          <Link to={path} style={{ color: color }}>
            <div className='Button-inner-wrapper'>
              <div className='Button-name'>{name}</div>
              {IconComponent}
            </div>
          </Link>
        </div>
      ) : (
        <div
          className='Button-wrapper'
          style={{ backgroundColor: backgroundColor, color: color }}>
          <div className='Button-inner-wrapper'>
            <div className='Button-name'>{name}</div>
            {IconComponent}
          </div>
        </div>
      )}
    </button>
  );
};

export default Button;
