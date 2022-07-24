import { Injectable } from '@angular/core';
import {Order} from "../model/order";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {ProductIdQuantity} from "../model/product-id-quantity";
import {LoginService} from "./login.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order : Order | undefined;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getOrder() : Order | undefined
  {
    return this.order;
  }

  sendOrder(order: Order) {
    return this.http.post(environment.orderURL, order, {responseType: 'text'});
  }

  updateOrder(product: Product) : void{
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
      this.order = {customer: this.loginService.getUsername(), products: [{productId: product.id, quantity: 1}]}
    }
  }
}
