import { useEffect, useState } from 'react';
import { ColorPalette, InputColors } from '../../model/colors';
import './Input.scss';
import { FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../../services';

type InputType = {
  type: string;
  id: string;
  placeholder: string;
  icon: JSX.Element;
  yup?: any;
  error?: any;
};

const Input = ({ id, type, yup, placeholder, error, icon }: InputType) => {
  const [style, setStyle] = useState(InputColors.DEFAULT);

  const setStyleByError = (error: any, color: InputColors) =>
    setStyle(error ? InputColors.ERROR : color);

  useEffect(() => {
    setStyleByError(error, InputColors.DEFAULT);
  }, [error]);

  return (
    <div className={`FlashIt-Input-${style}`}>
      <div className='icon-input'>
        {icon}
        <input
          style={{ color: ColorPalette.EMPTY }}
          type={type}
          id={id}
          placeholder={placeholder}
          {...yup}
          onFocus={() => setStyleByError(error, InputColors.FOCUS)}
          onBlur={() => setStyleByError(error, InputColors.DEFAULT)}
        />
      </div>
      {error && (
        <FiAlertCircle
          onClick={() =>
            toast.error(error, { ...toastOptions, toastId: error })
          }
        />
      )}
    </div>
  );
};

export default Input;
