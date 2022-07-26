import { Component, OnInit } from '@angular/core';
import {OrderedProduct} from "../model/orderedProduct";
import { ProductIdQuantity } from '../model/product-id-quantity';
import {Location} from "@angular/common";
import {selectAllOrderProducts} from "../store/selectors/order.selectors";
import {AppState} from "../store/state/app.state";
import {Store} from "@ngrx/store";
import {selectProductByID} from "../store/selectors/product.selectors";
import {take} from "rxjs";
import {submitOrder} from "../store/actions/order.actions";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  orderedProducts: OrderedProduct[] = [];

  products : ProductIdQuantity[] = [];

  columnsToDisplay = ['category', 'productName', 'price', 'quantity'];

  constructor(private location: Location, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(selectAllOrderProducts).pipe(take(1)).subscribe((response) => {
      this.products = response;
      console.log(this.products);
      this.getProducts();
    });
  }


  getProducts() : void{
    if (this.products) {
      for (let prod of this.products) {
        this.store.select(selectProductByID(prod.productId)).pipe(take(1)).subscribe((product) => {
          if (product) {
            this.orderedProducts.push({
              name: product.name,
              category: product.category,
              price: product.price,
              quantity: prod.quantity
            });
          }
        });
      }
    }
  }

  sendOrder() : void {
    this.store.dispatch(submitOrder({products : this.products}));
    this.orderedProducts = [];
  }
}
