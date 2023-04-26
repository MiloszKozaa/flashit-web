export interface IUser {
  _id: string;
  email: string;
  password: string;
  active: boolean;
  username: string;
  friends: [];
  nativeLanguage: string;
}
