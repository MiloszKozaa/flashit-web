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
      <div className='FlashItPublicPattern-triangles'>
        <TrianglePattern color={color} />
        <TrianglePattern
          color={color}
          style={{ transform: 'rotate(180deg)' }}
        />
      </div>
      <div className='FlashItPublicPattern-children'>{children}</div>
    </div>
  );
};

export default FlashItPublicPattern;
