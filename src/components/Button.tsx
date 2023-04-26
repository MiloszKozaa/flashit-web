import { Link } from 'react-router-dom';
import ArrowIcon from '../assets/icons/ArrowIcon';
import './Button.css';

export type ButtonType = {
  path: string;
  name: string;
  color: string;
  backgroundColor: string;
};

const Button = ({ path, name, color, backgroundColor }: ButtonType) => {
  return (
    <div
      className='Button-wrapper'
      style={{ backgroundColor: backgroundColor, color: color }}>
      <Link to={path} style={{ color: color }}>
        <div className='Button-inner-wrapper'>
          <div className='Button-name'>{name}</div>
          <ArrowIcon color={color} />
        </div>
      </Link>
    </div>
  );
};

export default Button;
