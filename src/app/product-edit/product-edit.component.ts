import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Product} from "../model/product";
import {ProductsService} from "../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import { Location } from '@angular/common';


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

  constructor(private route: ActivatedRoute, private productService: ProductsService, private location: Location) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductId() : number
  {
    return parseInt(<string>this.route.snapshot.paramMap.get('id'));
  }

  getProductById() : void
  {
    this.getProductSubscription = this.productService.getProductById(this.getProductId())
      .subscribe((product) => {this.product = product; this.setForm();},
        (error) => {console.log(error);}
      )
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
    const updatedProduct = {
      id: this.getProductId(),
      name: this.editForm.value.name,
      category: this.editForm.value.category,
      image: this.editForm.value.image,
      price: parseInt(<string>this.editForm.value.price),
      description: this.editForm.value.description
    }
    this.productService.updateProduct(updatedProduct).subscribe(
        () => {alert("Product updated successfully!");
          this.onLeave();},
        (error) => {console.log(error);}
    );
  }

  onLeave() : void
  {
    this.getProductSubscription?.unsubscribe();
    this.location.back();

  }
}
