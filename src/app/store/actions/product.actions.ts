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

export const addProduct = createAction(
  '[ProductAdd - Page] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[ProductAdd - Page] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[ProductAdd - Page] Add Product Failure',
  props<{ error : string }>()
);

export const removeProduct = createAction(
  '[ProductDetail - Page] Remove Product',
  props<{ id: number }>()
);

export const removeProductSuccess = createAction(
  '[ProductDetail - Page] Remove Product Success',
  props<{ id: number }>()
);

export const removeProductFailure = createAction(
  '[ProductDetail - Page] Remove Product Failure',
  props<{ error : string }>()
);

export const updateProduct = createAction(
  '[ProductDetail - Page] Update Product',
  props<{ product: Product}>()
);

export const updateProductSuccess = createAction(
  '[ProductDetail - Page] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[ProductDetail - Page] Update Product Failure',
  props<{ error : string }>()
);

export const getProduct = createAction(
  '[ProductList - Page] Get Product',
  props<{ id: number }>()
);

export const getProductSuccess = createAction(
  '[ProductList - Page] Get Product Success',
  props<{ product: Product }>()
);

export const getProductFailure = createAction(
  '[ProductList - Page] Get Product Failure',
  props<{ error : string }>()
);
