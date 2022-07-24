import { Component, OnInit } from '@angular/core';
import {Order} from "../model/order";
import {ProductsService} from "../services/products.service";
import {OrderedProduct} from "../model/orderedProduct";
import {OrderService} from "../services/order.service";
import { ProductIdQuantity } from '../model/ProductIdQuantity';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  private order: Order | undefined;

  orderedProducts: OrderedProduct[] = [];

  constructor(private productService: ProductsService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.order = this.orderService.getOrder();
    this.getProducts();
  }

  getProducts() {
    let prod: ProductIdQuantity;
    if (this.order) {
      for (let index in this.order.products) {
        prod = this.order.products[index];
        this.productService.getProductById(prod.productId).subscribe(
          (product) => {
            this.orderedProducts.push({
              name: product.name,
              category: product.category,
              price: product.price,
              quantity: prod.quantity
            })
          }
        )
      }
    }
  }

  sendOrder() {
    if (this.order) {
      this.orderService.sendOrder(this.order).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
