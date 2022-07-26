import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {OrderState} from "../state/order.state";

export const selectOrderProducts = (state: AppState) => state.orderProducts;

export const selectAllOrderProducts = createSelector(
  selectOrderProducts,
  (state: OrderState) => state.products
);
