import { Component, OnInit } from '@angular/core';
import {AppState} from "../store/state/app.state";
import {selectAllProducts} from "../store/selectors/product.selectors";
import {loadProducts} from "../store/actions/product.actions";
import {Store} from "@ngrx/store";
import {selectAdmin, selectCustomer} from "../store/selectors/login.selectors";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public allProducts$ = this.store.select(selectAllProducts);

  constructor(private store: Store<AppState>) { }

  isAdmin : boolean | undefined;

  isCustomer : boolean | undefined;

  columnsToDisplay = ['category', 'productName', 'price', 'detailButton'];

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.store.select(selectAdmin).subscribe((response) => {this.isAdmin = response});
    this.store.select(selectCustomer).subscribe((response) => {this.isCustomer = response});
  }

}
