import {initialProductState, ProductState} from "./product.state";
import {RouterReducerState} from "@ngrx/router-store";

export interface AppState {
  router?: RouterReducerState;
  products: ProductState;
}

export const initialAppState: AppState = {
  products: initialProductState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
