import { NavigateFunction } from 'react-router-dom';

export const goTo = (navigate: NavigateFunction, path: string) => {
  navigate(`/${path}`);
};
