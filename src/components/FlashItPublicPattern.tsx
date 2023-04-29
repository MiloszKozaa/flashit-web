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
      <div className='FlashItPublicPattern-triangles-top'>
        <TrianglePattern color={color} />
      </div>
      <div className='FlashItPublicPattern-triangles-bottom'>
        <TrianglePattern
          color={color}
          style={{ transform: 'rotate(180deg)' }}
        />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default FlashItPublicPattern;
