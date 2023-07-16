import './ButtonContent.scss';

type ButtonContentType = {
  name?: string;
  Icon: any;
  isHighlighted?: boolean;
};

const ButtonContent = ({ name, Icon, isHighlighted }: ButtonContentType) => {
  return (
    <div
      className={`inner-wrapper${isHighlighted ? `-highlighted` : ''}${
        !name ? '-withoutName' : ''
      }`}>
      <div className='name'>{name ?? ''}</div>
      {Icon}
    </div>
  );
};

export default ButtonContent;
