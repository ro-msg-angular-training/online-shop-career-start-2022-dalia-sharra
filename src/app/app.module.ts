import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductAddComponent } from './product-add/product-add.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    ProductEditComponent,
    ProductAddComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
