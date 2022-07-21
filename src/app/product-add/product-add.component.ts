import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../services/products.service";

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

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  refreshForm() {
    this.addForm.setValue({
      name: "",
      category: "",
      image: "",
      price: "",
      description: ""
    });
  }

  onSubmit() {
    let newProduct = {
      name: this.addForm.value.name,
      category: this.addForm.value.category,
      image: this.addForm.value.image,
      price: Number(this.addForm.value.price),
      description: this.addForm.value.description
    }
    this.productService.addProduct(newProduct).subscribe(
      (product) => { console.log(product);
        alert("Product added successfully!");
        this.refreshForm();},
      (error) => {console.log(error);}
    )
  }
}
