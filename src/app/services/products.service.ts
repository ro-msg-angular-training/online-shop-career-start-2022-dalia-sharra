import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {Product} from "../model/product";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Product[]>
  {
    return this.http.get<Product[]>(environment.productsURL);
  }

  getProductById(id: number) : Observable<Product>
  {
    const url = `${environment.productsURL}/${id}`;
    return this.http.get<Product>(url);
  }

  deleteProduct(id:number) : Observable<unknown>
  {
    const url = `${environment.productsURL}/${id}`;
    return this.http.delete(url);
  }

  updateProduct(product: any) : Observable<unknown>
  {
    const url = `${environment.productsURL}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  addProduct(product: any) : Observable<Product> {
    return this.http.post<Product>(environment.productsURL, product);
  }
}
