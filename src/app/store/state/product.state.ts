import {Product} from "../../model/product";

export interface ProductState {
  products: Product[];
  selectedProduct : Product | undefined;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialProductState: ProductState = {
  products: [],
  selectedProduct : undefined,
  error: "",
  status: 'pending',
};
