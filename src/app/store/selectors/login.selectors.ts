import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {LoginState} from "../state/login.state";

export const selectLoginState = (state: AppState) => state.loginState;

export const selectAdmin = createSelector(
  selectLoginState,
  (state: LoginState) => { return state.loggedUser?.roles.includes("admin") === true; }
);

export const selectCustomer = createSelector(
  selectLoginState,
  (state: LoginState) => { return state.loggedUser?.roles.includes("customer") === true; }
);
