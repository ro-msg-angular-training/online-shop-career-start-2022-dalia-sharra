import {ProductIdQuantity} from "../../model/product-id-quantity";

export interface OrderState {
  products : ProductIdQuantity[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialOrderState: OrderState = {
  products: [],
  error: "",
  status: 'pending',
};
