import { Component, OnInit } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : Product = {id : 0, name: "Product1", category: "devices", image: "image", price: 300, description: "description1"};

  constructor() { }

  ngOnInit(): void {
  }

}
