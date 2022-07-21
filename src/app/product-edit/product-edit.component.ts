import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Product} from "../model/product";
import {ProductsService} from "../services/products.service";
import {ActivatedRoute} from "@angular/router";

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

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductId() : number
  {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  getProductById()
  {
    this.productService.getProductById(this.getProductId())
      .subscribe((product) => {this.product = product; this.setForm();},
        (error) => {console.log(error);}
      )
  }

  setForm()
  {
    if(this.product)
    {
      this.editForm.setValue({
        name: this.product.name,
        category: this.product.category,
        image: this.product.image,
        price: String(this.product.price),
        description: this.product.description

      });
    }
  }

  onSubmit() {
    let updatedProduct = {
      id: this.getProductId(),
      name: this.editForm.value.name,
      category: this.editForm.value.category,
      image: this.editForm.value.image,
      price: Number(this.editForm.value.price),
      description: this.editForm.value.description
    }
    this.productService.updateProduct(updatedProduct).subscribe(
        (product) => { console.log(product);},
        (error) => {console.log(error);}
    )
  }
}
