import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductsListComponent} from "./products-list/products-list.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductAddComponent} from "./product-add/product-add.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], children:
      [
        { path: 'products', component: ProductsListComponent },
        { path: 'detail/:id', component: ProductDetailComponent },
        { path: 'shopping-cart', component: ShoppingCartComponent },
        { path: 'edit/:id', component: ProductEditComponent },
        { path: 'add', component: ProductAddComponent },
      ]},
  { path:'', redirectTo:'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
