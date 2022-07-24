import {ProductIdQuantity} from "./product-id-quantity";

export interface Order
{
  customer: string,
  products : ProductIdQuantity[]
}
