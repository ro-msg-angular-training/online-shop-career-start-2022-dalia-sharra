import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products.service";
import { Location } from '@angular/common';
import {OrderService} from "../services/order.service";
import {LoginService} from "../services/login.service";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/app.state";
import {getProduct, removeProduct} from "../store/actions/product.actions";
import {selectProduct} from "../store/selectors/product.selectors";
import {selectAdmin, selectCustomer} from "../store/selectors/login.selectors";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : Product | undefined;

  isAdmin : boolean | undefined;

  isCustomer : boolean | undefined;

  private getProductSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private location: Location,
              private orderService: OrderService, private  loginService: LoginService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getProduct();
    this.store.select(selectAdmin).subscribe((response) => {this.isAdmin = response});
    this.store.select(selectCustomer).subscribe((response) => {this.isCustomer = response});
  }

  getProductId() : number
  {
    return parseInt(<string>this.route.snapshot.paramMap.get('id'));
  }

  getProduct(): void {
    this.store.dispatch(getProduct({id : this.getProductId()}));
    this.getProductSubscription = this.store.select(selectProduct).subscribe((product) => {this.product = product;});
  }

  addToCart() : void {
    if(this.product)
      this.orderService.updateOrder(this.product);
    alert("Product added to the shopping cart!");
  }

  deleteProduct() : void{
    this.store.dispatch(removeProduct({id: this.getProductId()}));
    alert("Product deleted successfully!");
    this.onLeave();
  }

  onLeave() : void
  {
    this.getProductSubscription?.unsubscribe();
    this.location.back();
  }

}
