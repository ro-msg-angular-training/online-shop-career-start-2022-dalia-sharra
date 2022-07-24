import {ProductIdQuantity} from "./ProductIdQuantity";

export interface Order
{
  customer: string,
  products : ProductIdQuantity[]
}
