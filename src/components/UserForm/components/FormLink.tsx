import { Link } from 'react-router-dom';
import './FormLink.scss';

type FormLinkType = {
  text: string;
  path: string;
};

const FormLink = ({ text, path }: FormLinkType) => {
  return (
    <div className='FormLink-wrapper'>
      <Link to={`/${path}`}>{text}</Link>
    </div>
  );
};

export default FormLink;
