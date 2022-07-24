import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../services/products.service";
import {Subscription} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  addForm = new FormGroup({
    name : new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern("^[1-9]*$")]),
    description: new FormControl('', Validators.required)
  });

  private addSubscription: Subscription | undefined;

  constructor(private productService: ProductsService, private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    if ( this.addForm.value.name && this.addForm.value.price && this.addForm.value.category && this.addForm.value.image && this.addForm.value.description) {
      const newProduct = {
        name: this.addForm.value.name,
        category: this.addForm.value.category,
        image: this.addForm.value.image,
        price: parseInt(this.addForm.value.price),
        description: this.addForm.value.description
      }
      this.addSubscription = this.productService.addProduct(newProduct).subscribe(
        () => {
          alert("Product added successfully!");
          this.addForm.reset();
          this.onLeave();
        },
        (error) => {
          console.log(error);
        });
    }
  }

  onLeave() : void{
      this.addSubscription?.unsubscribe();
      this.location.back();
  }
}
