import { Injectable } from '@angular/core';
import {Order} from "../model/order";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {ProductIdQuantity} from "../model/ProductIdQuantity";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderURL = "http://localhost:3000/orders";

  private order : Order | undefined;

  constructor(private http: HttpClient) { }

  getOrder()
  {
    return this.order;
  }

  sendOrder(order: Order) : Observable<unknown> {
    return this.http.post<Order>(this.orderURL, order);
  }

  updateOrder(product: Product) {
    if (this.order) {
      let found = false;
      let prod: ProductIdQuantity;
      for (let index in this.order.products) {
        prod = this.order.products[index];
        if (prod.productId == product.id) {
          prod.quantity++;
          found = true;
        }
      }
      if(!found)
      {
        this.order.products.push({
          productId: product.id,
          quantity: 1
        })
      }
    } else {
      this.order = {customer: "doej", products: [{productId: product.id, quantity: 1}]}
    }
    console.log(this.order);
  }
}
