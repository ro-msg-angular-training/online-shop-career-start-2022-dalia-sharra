import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {ProductsService} from "../../services/products.service";
import {
  addProduct, addProductFailure, addProductSuccess, getProduct, getProductFailure, getProductSuccess,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  removeProduct, removeProductFailure, removeProductSuccess, updateProduct, updateProductFailure, updateProductSuccess
} from "../actions/product.actions";
import {catchError, from, map, of, switchMap} from "rxjs";
import {Product} from "../../model/product";

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private productService: ProductsService
  ) {}

  // Run this code when a loadProducts action is dispatched
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        // Call the getProducts method, convert it to an observable
        from(this.productService.getAllProducts()).pipe(
          // Take the returned value and return a new success action containing the products
          map((products) => loadProductsSuccess({ products: products })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );

  saveProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addProduct),
        switchMap((action) => from(this.productService.addProduct(action.product)
          .pipe(
            map((product : any) => addProductSuccess({product})),
            catchError((error) => of(addProductFailure({error})))
          )))
      )
  );

  removeProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(removeProduct),
        switchMap((action) => from(this.productService.deleteProduct(action.id)
          .pipe(map(() => action.id),
            map(id => removeProductSuccess({id})),
            catchError((error) => of(removeProductFailure({error})))
          )))
      )
  );

  updateProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateProduct),
        switchMap((action) => from(this.productService.updateProduct(action.product)
          .pipe(map(() => action.product),
            map((product: Product) => updateProductSuccess({product})),
            catchError((error) => of(updateProductFailure({error})))
          )))
      )
  );

  getProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getProduct),
        switchMap((action) => from(this.productService.getProductById(action.id)
          .pipe(
            map((product: Product) => getProductSuccess({product})),
            catchError((error) => of(getProductFailure({error})))
          )))
      )
  );
}
