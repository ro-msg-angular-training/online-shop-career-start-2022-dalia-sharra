import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import { Location } from '@angular/common';
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/app.state";
import {getProduct, updateProduct} from "../store/actions/product.actions";
import {selectProduct} from "../store/selectors/product.selectors";


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  editForm = new FormGroup({
    name : new FormControl('', Validators.required,),
    category: new FormControl('', Validators.required,),
    image: new FormControl('', Validators.required,),
    price: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]),
    description: new FormControl('', Validators.required,)
  });

  product : Product | undefined;

  private getProductSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private location: Location, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductId() : number
  {
    return parseInt(<string>this.route.snapshot.paramMap.get('id'));
  }

  getProductById() : void
  {
    this.store.dispatch(getProduct({id: this.getProductId()}));
    this.getProductSubscription = this.store.select(selectProduct).subscribe((product) => {this.product = product; this.setForm()});
  }

  setForm() : void
  {
    if(this.product)
    {
      this.editForm.setValue({
        name: this.product.name,
        category: this.product.category,
        image: this.product.image,
        price: this.product.price.toString(),
        description: this.product.description

      });
    }
  }

  onSubmit() : void {
    if (this.editForm.value.name && this.editForm.value.price && this.editForm.value.category && this.editForm.value.image && this.editForm.value.description) {
      const updatedProduct: Product = {
        id: this.getProductId(),
        name: this.editForm.value.name,
        category: this.editForm.value.category,
        image: this.editForm.value.image,
        price: parseInt(<string>this.editForm.value.price),
        description: this.editForm.value.description
      }
      this.store.dispatch(updateProduct({product : updatedProduct}));
      this.onLeave();
    }
  }

  onLeave() : void
  {
    this.getProductSubscription?.unsubscribe();
    this.location.back();
  }
}
