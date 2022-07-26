import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { productReducers } from './store/reducers/product.reducers';
import { environment } from '../environments/environment';
import { ProductEffects } from './store/effects/product.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductAddComponent } from './product-add/product-add.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from '@angular/material/button';
import {LoginEffects} from "./store/effects/login.effects";
import {loginReducers} from "./store/reducers/login.reducers";
import {orderReducers} from "./store/reducers/order.reducers";
import {OrderEffects} from "./store/effects/order.effects";
import { MatDialogModule} from "@angular/material/dialog";
import { SafeDeleteDialogComponent } from './safe-delete-dialog/safe-delete-dialog.component';
import { MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    ProductEditComponent,
    ProductAddComponent,
    LoginComponent,
    SafeDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({products: productReducers, loginState: loginReducers, orderProducts: orderReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ProductEffects, LoginEffects, OrderEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
