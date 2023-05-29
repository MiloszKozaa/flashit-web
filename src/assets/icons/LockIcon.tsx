import { IIcon } from '../../model/icon';

const LockIcon = ({ color }: IIcon) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_702_91)'>
        <path
          d='M19 8.424V7C19 5.14348 18.2625 3.36301 16.9497 2.05025C15.637 0.737498 13.8565 0 12 0C10.1435 0 8.36301 0.737498 7.05025 2.05025C5.7375 3.36301 5 5.14348 5 7V8.424C4.10936 8.81271 3.35129 9.45252 2.8185 10.2652C2.28571 11.0779 2.00128 12.0282 2 13V19C2.00159 20.3256 2.52888 21.5964 3.46622 22.5338C4.40356 23.4711 5.6744 23.9984 7 24H17C18.3256 23.9984 19.5964 23.4711 20.5338 22.5338C21.4711 21.5964 21.9984 20.3256 22 19V13C21.9987 12.0282 21.7143 11.0779 21.1815 10.2652C20.6487 9.45252 19.8906 8.81271 19 8.424V8.424ZM7 7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V8H7V7ZM20 19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V13C4 12.2044 4.31607 11.4413 4.87868 10.8787C5.44129 10.3161 6.20435 10 7 10H17C17.7956 10 18.5587 10.3161 19.1213 10.8787C19.6839 11.4413 20 12.2044 20 13V19Z'
          fill={color}
        />
        <path
          d='M12 13.9995C11.7348 13.9995 11.4804 14.1049 11.2929 14.2924C11.1054 14.4799 11 14.7343 11 14.9995V16.9995C11 17.2647 11.1054 17.5191 11.2929 17.7066C11.4804 17.8941 11.7348 17.9995 12 17.9995C12.2652 17.9995 12.5196 17.8941 12.7071 17.7066C12.8947 17.5191 13 17.2647 13 16.9995V14.9995C13 14.7343 12.8947 14.4799 12.7071 14.2924C12.5196 14.1049 12.2652 13.9995 12 13.9995Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_702_91'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LockIcon;