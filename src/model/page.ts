export interface IPage {
  name: string;
  url: string;
  component: JSX.Element;
  icon?: (color: string) => JSX.Element;
  isNavbarDisplayed?: boolean;
}
