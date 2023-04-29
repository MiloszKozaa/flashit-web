import './FunctionalWrapper.css';

type FunctionalWrapperType = {
  children: React.ReactNode;
  style: {};
  onClick?: () => void;
};

const FunctionalWrapper = ({
  children,
  style,
  onClick,
}: FunctionalWrapperType) => {
  return (
    <div className='FunctionalWrapper' style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default FunctionalWrapper;
