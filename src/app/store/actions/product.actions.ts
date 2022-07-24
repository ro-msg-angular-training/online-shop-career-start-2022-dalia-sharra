import {createAction, props} from "@ngrx/store";
import {Product} from "../../model/product";

export const loadProducts = createAction('[ProductList - Page] Load Todos');

export const loadProductsSuccess = createAction(
  '[Product API] Product Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product API] Product Load Failure',
  props<{ error: string }>()
);
