import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Product[]>
  {
    return this.http.get<Product[]>(this.productsURL);
  }

  getProduct(id: number) : Observable<Product>
  {
    const url = `${this.productsURL}/${id}`;
    return this.http.get<Product>(url);
  }

  deleteProduct(id:number) : Observable<unknown>
  {
    const url = `${this.productsURL}/${id}`;
    return this.http.delete(url);
  }
}
