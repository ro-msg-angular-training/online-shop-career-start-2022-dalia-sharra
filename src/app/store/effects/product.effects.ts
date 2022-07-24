import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {ProductsService} from "../../services/products.service";
import {loadProducts, loadProductsFailure, loadProductsSuccess} from "../actions/product.actions";
import {catchError, from, map, of, switchMap} from "rxjs";

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
}
