import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {catchError, from, map, of, switchMap, tap} from "rxjs";
import {OrderService} from "../../services/order.service";
import {submitOrder, submitOrderFailure, submitOrderSuccess, updateOrder} from "../actions/order.actions";

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private orderService: OrderService
  ) {}

  updateOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateOrder),
      tap( () => alert('Your product has been added to cart!'))
    ),
    {dispatch: false}
  );

  submitOrder$ = createEffect( () =>
  this.actions$.pipe(
    ofType(submitOrder),
    switchMap((action) =>
      from(this.orderService.sendOrder(action.products)).pipe(
        map(() => submitOrderSuccess()),
        catchError((error) => of(submitOrderFailure({ error })))
      )
    )
  ));

  submitOrderSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(submitOrderSuccess),
        tap( () => alert('Your order has been placed successfully!'))
      ),
    {dispatch: false}
  );

  submitOrderFailure$ = createEffect(() =>
      this.actions$.pipe(
        ofType(submitOrderFailure),
        tap( () => alert('Something went wrong at checkout! Please try again!'))
      ),
    {dispatch: false}
  );
}
