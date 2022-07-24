import {Product} from "../../model/product";

export interface ProductState {
  products: Product[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialProductState: ProductState = {
  products: [],
  error: "",
  status: 'pending',
};
