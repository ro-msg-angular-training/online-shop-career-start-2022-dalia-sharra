import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {LoginService} from "../services/login.service";
import {AppState} from "../store/state/app.state";
import {selectAllProducts} from "../store/selectors/product.selectors";
import {loadProducts} from "../store/actions/product.actions";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  //products : Product[] | undefined;

  public allProducts$ = this.store.select(selectAllProducts);

  constructor(private productsService: ProductsService, private loginService : LoginService, private store: Store<AppState>) { }

  isAdmin : boolean | undefined;

  isCostumer : boolean | undefined;

  ngOnInit(): void {
    //this.getProducts();
    this.store.dispatch(loadProducts());
    this.isAdmin = this.loginService.isAdmin();

    this.isCostumer = this.loginService.isCostumer();
  }

  /*private getProducts()
  {
    this.productsService.getAllProducts().
      subscribe((data) => {this.products = data;},
      (error) => {console.log(error);});
  }*/
}
