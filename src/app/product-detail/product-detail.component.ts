import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/app.state";
import {getProduct, removeProduct} from "../store/actions/product.actions";
import {selectProduct} from "../store/selectors/product.selectors";
import {selectAdmin, selectCustomer} from "../store/selectors/login.selectors";
import {updateOrder} from "../store/actions/order.actions";
import {MatDialog} from "@angular/material/dialog";
import {SafeDeleteDialogComponent} from "../safe-delete-dialog/safe-delete-dialog.component";

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

  constructor(private route: ActivatedRoute, private location: Location, private store: Store<AppState>, private dialog: MatDialog) { }

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
      this.store.dispatch(updateOrder({product: this.product}));
  }

  deleteProduct() : void{
    this.store.dispatch(removeProduct({id: this.getProductId()}));
    this.onLeave();
  }

  onLeave() : void
  {
    this.getProductSubscription?.unsubscribe();
    this.location.back();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(SafeDeleteDialogComponent, {
      data: { name: this.product?.name },
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === true)
      {
        this.deleteProduct();
      }
    });
  }
}
