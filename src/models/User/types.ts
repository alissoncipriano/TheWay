export interface IUser {
  id: number;
  name: string;
  email: string;
  loggedIn: boolean;
  isAdmin: boolean;
  errorAuthenticationMessage: string;
}
