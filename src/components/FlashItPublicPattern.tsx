import TrianglePattern from '../assets/image/TrianglePattern';
import './FlashItPublicPattern.css';

type FlashItPublicPatternType = {
  color: string;
  children: React.ReactNode;
};

const FlashItPublicPattern = ({
  color,
  children,
}: FlashItPublicPatternType) => {
  return (
    <div className={`FlashItPublicPattern`}>
      <TrianglePattern color={color} />
      {children}
      <TrianglePattern color={color} style={{ transform: 'rotate(180deg)' }} />
    </div>
  );
};

export default FlashItPublicPattern;
