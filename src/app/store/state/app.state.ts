import {initialProductState, ProductState} from "./product.state";
import {RouterReducerState} from "@ngrx/router-store";
import {initialLoginState, LoginState} from "./login.state";
import {initialOrderState, OrderState} from "./order.state";

export interface AppState {
  router?: RouterReducerState;
  products: ProductState;
  loginState: LoginState;
  orderProducts: OrderState;
}

export const initialAppState: AppState = {
  products: initialProductState,
  loginState : initialLoginState,
  orderProducts: initialOrderState
};

export function getInitialState(): AppState {
  return initialAppState;
}
