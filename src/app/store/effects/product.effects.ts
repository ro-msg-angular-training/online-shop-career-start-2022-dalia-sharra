import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductsService} from "../../services/products.service";
import {
  addProduct, addProductFailure, addProductSuccess, getProduct, getProductFailure, getProductSuccess,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  removeProduct, removeProductFailure, removeProductSuccess, updateProduct, updateProductFailure, updateProductSuccess
} from "../actions/product.actions";
import {catchError, from, map, mergeMap, of, switchMap, tap} from "rxjs";
import {Product} from "../../model/product";

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        from(this.productService.getAllProducts()).pipe(
          map((products) => loadProductsSuccess({ products: products })),
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

  saveProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addProductSuccess),
        tap(() => {
          alert('Product added successfully!')
        })
      ),
    { dispatch: false }
  );

  saveProductFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addProductFailure),
        tap(() => {
          alert('Something went wrong!')
        })
      ),
    { dispatch: false }
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

  removeProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(removeProductSuccess),
        tap(() => {
          alert('Product deleted successfully!')
        })
      ),
    { dispatch: false }
  );

  removeProductFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(removeProductFailure),
        tap(() => {
          alert('Something went wrong!')
        })
      ),
    { dispatch: false }
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

  updateProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateProductSuccess),
        tap(() => {
          alert('Product updated successfully!')
        })
      ),
    { dispatch: false }
  );

  updateProductFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateProductFailure),
        tap(() => {
          alert('Something went wrong!')
        })
      ),
    { dispatch: false }
  );

  getProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getProduct),
        mergeMap((action) => from(this.productService.getProductById(action.id)
          .pipe(
            map((product: Product) => getProductSuccess({product: product})),
            catchError((error) => of(getProductFailure({error})))
          )))
      )
  );
}
