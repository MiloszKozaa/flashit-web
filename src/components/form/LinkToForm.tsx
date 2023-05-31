import { Link } from 'react-router-dom';
import { ColorPalette } from '../../model/colors';

type LinkToFormType = {
  text: string;
  path: string;
};

const LinkToForm = ({ text, path }: LinkToFormType) => {
  return (
    <div style={{ opacity: '50%', textAlign: 'center' }}>
      <Link to={`/${path}`} style={{ color: ColorPalette.EMPTY }}>
        {text}
      </Link>
    </div>
  );
};

export default LinkToForm;
