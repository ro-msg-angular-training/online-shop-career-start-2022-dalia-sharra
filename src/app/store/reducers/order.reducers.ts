import {createReducer, on} from "@ngrx/store";
import {initialOrderState} from "../state/order.state";
import {submitOrder, submitOrderFailure, submitOrderSuccess, updateOrder} from "../actions/order.actions";

export const orderReducers = createReducer(
  initialOrderState,
  on(updateOrder, (state, { product }) => {
    const orderedProduct = state.products.find(x => x.productId === product.id);
    if(orderedProduct === undefined)
    {
      return {
        ...state,
        products: [...state.products, {productId: product.id, quantity: 1}],
        status: 'success',
        error: ''
      };
    }
    else
    {
      const newOrderedProduct = {productId: product.id, quantity: (orderedProduct.quantity + 1)};
      return {
        ...state,
        products: state.products.map((item) => {return item.productId === product.id ? newOrderedProduct : item;}),
        status: 'success',
        error: ''
      };
    }
  }),
  on(submitOrder, (state) => ({
    ...state,
    status: 'loading'
  })),
  on(submitOrderSuccess, (state) => ({
    ...state,
    products: [],
    status: 'success'
  })),
  on(submitOrderFailure, (state, {error}) => ({
    ...state,
    status: 'error',
    error: error
  })),
);
