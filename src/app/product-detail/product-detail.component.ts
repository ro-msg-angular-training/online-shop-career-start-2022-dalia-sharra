import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products.service";
import { Location } from '@angular/common';
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private location: Location, private orderService: OrderService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.deleteProduct(id)
      .subscribe(() => {
          alert("Product deleted successfully!");
        },
        (error) => {console.log(error);}
      )
    this.location.back();
  }
}
