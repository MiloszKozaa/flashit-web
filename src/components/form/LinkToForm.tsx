import { Link } from 'react-router-dom';

type LinkToFormType = {
  text: string;
  path: string;
  link: string;
  color: string;
};

const LinkToForm = ({ text, path, link, color }: LinkToFormType) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {text}
      <Link to={`/${path}`} style={{ color: color }}>
        {link}
      </Link>
    </div>
  );
};

export default LinkToForm;
