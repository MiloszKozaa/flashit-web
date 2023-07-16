export interface IPage {
  name: string;
  url: string;
  component: JSX.Element;
  icon?: JSX.Element;
  isNavbarDisplayed?: boolean;
}
