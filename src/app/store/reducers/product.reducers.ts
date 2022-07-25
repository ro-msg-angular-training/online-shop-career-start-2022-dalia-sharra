import {createReducer, on} from "@ngrx/store";
import {initialProductState} from "../state/product.state";
import {
  addProduct, addProductFailure, addProductSuccess, getProduct, getProductFailure, getProductSuccess,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  removeProduct, removeProductFailure, removeProductSuccess, updateProduct, updateProductFailure, updateProductSuccess
} from "../actions/product.actions";

export const productReducers = createReducer(
  initialProductState,
  on(addProduct, (state) => ({
    ...state,
    status: 'loading'
  })),
  on(addProductSuccess, (state, {product}) => ({
    ...state,
    products: [...state.products, product],
    status: 'success'
  })),
  on(addProductFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error'
  })),
  on(removeProduct, (state) => ({
    ...state,
    status: 'loading'
  })),
  on(removeProductSuccess, (state , { id }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== id),
    status: 'success'
  })),
  on(removeProductFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error'
  })),
  on(updateProduct, (state) => ({
    ...state,
    status: 'loading'
  })),
  on(updateProductSuccess, (state) => ({
    ...state,
    status: 'success'
  })),
  on(updateProductFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error'
  })),
  on(getProduct, (state) => ({
    ...state,
    status: 'loading'
  })),
  on(getProductSuccess, (state, {product}) => ({
    ...state,
    selectedProduct: product,
    status: 'success'
  })),
  on(getProductFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error'
  })),
  on(loadProducts, (state) => ({ ...state, status: 'loading' })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: "",
    status: 'success',
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
