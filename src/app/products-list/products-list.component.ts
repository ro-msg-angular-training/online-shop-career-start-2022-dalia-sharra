import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductsService} from "../services/products.service";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products : Product[] | undefined;

  constructor(private productsService: ProductsService, private loginService : LoginService) { }

  isAdmin = this.loginService.isAdmin();

  isCostumer = this.loginService.isCostumer();

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts()
  {
    this.productsService.getAllProducts().
      subscribe((data) => {this.products = data;},
      (error) => {console.log(error);});
  }
}
