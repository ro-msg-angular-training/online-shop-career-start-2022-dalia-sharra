import {User} from "../../model/user";

export interface LoginState {
  loggedUser: User | undefined;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialLoginState: LoginState = {
  loggedUser : undefined,
  error: "",
  status: 'pending',
};
