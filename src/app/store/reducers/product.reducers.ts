import {createReducer, on} from "@ngrx/store";
import {initialProductState} from "../state/product.state";
import {loadProducts, loadProductsFailure, loadProductsSuccess} from "../actions/product.actions";

export const productReducers = createReducer(
  // Supply the initial state
  initialProductState,

  // Trigger loading the products
  on(loadProducts, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded todos
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: "",
    status: 'success',
  })),
  // Handle todos load failure
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
