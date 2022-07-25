import {initialProductState, ProductState} from "./product.state";
import {RouterReducerState} from "@ngrx/router-store";
import {initialLoginState, LoginState} from "./login.state";

export interface AppState {
  router?: RouterReducerState;
  products: ProductState;
  loginState: LoginState;
}

export const initialAppState: AppState = {
  products: initialProductState,
  loginState : initialLoginState
};

export function getInitialState(): AppState {
  return initialAppState;
}
