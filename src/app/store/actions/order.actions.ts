import {createAction, props} from "@ngrx/store";
import {ProductIdQuantity} from "../../model/product-id-quantity";
import {Product} from "../../model/product";

export const updateOrder = createAction(
  '[Product Detail - Page] Add to cart',
  props<{ product: Product }>()
);

export const submitOrder = createAction(
  '[Shopping Cart - Page] Checkout',
  props<{ products: ProductIdQuantity[] }>()
);

export const submitOrderSuccess = createAction('[Shopping Cart - Page] Checkout Success');

export const submitOrderFailure = createAction(
  '[Shopping Cart - Page] Checkout Failure',
  props<{ error: string }>()
);
