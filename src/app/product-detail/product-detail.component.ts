import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : Product = {id : 0, name: "Product1", category: "devices", image: "image", price: 300, description: "description1"};
  productId: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  }

  addToCart() {
    alert("Product added to the shopping cart!");
  }
}
