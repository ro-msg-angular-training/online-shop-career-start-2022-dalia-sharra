import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {catchError, from, map, of, switchMap, tap} from "rxjs";
import {LoginService} from "../../services/login.service";
import {loginUser, loginUserFailure, loginUserSuccess} from "../actions/login.actions";
import {Router} from "@angular/router";

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private loginService: LoginService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      switchMap((action) =>
        from(this.loginService.login(action.credentials)).pipe(
          map((user) => loginUserSuccess({ user })),
          catchError((error) => of(loginUserFailure({ error })))
        )
      )
    )
  );


  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginUserSuccess),
        tap(() => {
          alert('You logged in successfully!')
          this.router.navigateByUrl('/products');
        })
      ),
    { dispatch: false }
  );

  loginError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginUserFailure),
        tap(() => alert('Password or username incorrect! Try again!'))
      ),
    { dispatch: false }
  );
}
