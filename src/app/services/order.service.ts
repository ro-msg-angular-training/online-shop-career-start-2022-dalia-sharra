import { Injectable } from '@angular/core';
import {Order} from "../model/order";
import {HttpClient} from "@angular/common/http";
import {ProductIdQuantity} from "../model/product-id-quantity";
import {LoginService} from "./login.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  sendOrder(products: ProductIdQuantity[]) {
    const order : Order = { customer: this.loginService.getUsername(), products: products};
    return this.http.post(environment.orderURL, order, {responseType: 'text'});
  }
}
