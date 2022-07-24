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
        ReactiveFormsModule,
      StoreModule.forRoot({products: productReducers}),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      }),
      EffectsModule.forRoot([ProductEffects]),
      !environment.production ? StoreDevtoolsModule.instrument() : [],

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
