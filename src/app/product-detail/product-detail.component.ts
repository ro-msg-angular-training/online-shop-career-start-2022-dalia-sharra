import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products.service";
import { Location } from '@angular/common';
import {OrderService} from "../services/order.service";
import {LoginService} from "../services/login.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : Product | undefined;

  isAdmin : boolean | undefined;

  isCostumer : boolean | undefined;

  private getProductSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private location: Location, private orderService: OrderService, private  loginService: LoginService) { }

  ngOnInit(): void {
    this.getProduct();
    this.isAdmin = this.loginService.isAdmin();

    this.isCostumer = this.loginService.isCostumer();
  }

  getProductId() : number
  {
    return parseInt(<string>this.route.snapshot.paramMap.get('id'));
  }

  getProduct(): void {
    this.getProductSubscription = this.productService.getProductById(this.getProductId())
      .subscribe((product) => {this.product = product;},
      (error) => {console.log(error);}
    );
  }

  addToCart() : void {
    if(this.product)
      this.orderService.updateOrder(this.product);
    alert("Product added to the shopping cart!");
  }

  deleteProduct() : void{
    this.productService.deleteProduct(this.getProductId())
      .subscribe(() => {
          alert("Product deleted successfully!");
          this.onLeave();
        },
        (error) => {console.log(error);}
      );
  }

  onLeave() : void
  {
    this.getProductSubscription?.unsubscribe();
    this.location.back();

  }

}
