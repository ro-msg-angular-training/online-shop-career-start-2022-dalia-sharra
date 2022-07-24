import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products.service";
import { Location } from '@angular/common';
import {OrderService} from "../services/order.service";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductsService, private location: Location, private orderService: OrderService, private  loginService: LoginService) { }

  product : Product | undefined;

  isAdmin = this.loginService.isAdmin();

  isCostumer = this.loginService.isCostumer();

  ngOnInit(): void {
    this.getProduct();
  }

  getProductId()
  {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(): void {
    this.productService.getProductById(this.getProductId())
      .subscribe((product) => {this.product = product;},
      (error) => {console.log(error);}
    )
  }

  addToCart() {
    if(this.product)
      this.orderService.updateOrder(this.product);
    alert("Product added to the shopping cart!");
  }

  deleteProduct() {
    this.productService.deleteProduct(this.getProductId())
      .subscribe(() => {
          alert("Product deleted successfully!");
        },
        (error) => {console.log(error);}
      )
    this.location.back();
  }

}
