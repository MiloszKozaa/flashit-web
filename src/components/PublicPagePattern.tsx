import TrianglePattern from '../assets/image/TrianglePattern';
import './PublicPagePattern.css';

type PublicPagePatternType = {
  color: string;
  type: 'BOTTOM' | 'TOP';
};

const PublicPagePattern = ({ color, type }: PublicPagePatternType) => {
  return (
    <div
      className={`PublicPagePattern-${type}`}>
      <TrianglePattern color={color} />
    </div>
  );
};

export default PublicPagePattern;
