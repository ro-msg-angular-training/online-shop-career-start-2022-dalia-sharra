import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {ProductState} from "../state/product.state";

export const selectProducts = (state: AppState) => state.products;

export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductState) => state.products
);

export const selectProduct = createSelector(
  selectProducts,
  (state: ProductState) => state.selectedProduct
);

