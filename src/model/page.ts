export interface IPage {
  name: string;
  url: string;
  component: JSX.Element;
  isDisplayedOnNavbar?: boolean;
}
