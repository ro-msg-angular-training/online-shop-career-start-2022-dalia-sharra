import {createAction, props} from "@ngrx/store";
import {User} from "../../model/user";
import {Credentials} from "../../model/credentials";

export const loginUser = createAction(
  '[Login - Page] UserLogin',
  props<{ credentials : Credentials }>()
);

export const loginUserSuccess = createAction(
  '[Login API] User Login Success',
  props<{ user: User }>()
);

export const loginUserFailure = createAction(
  '[Login API] User Login Failure',
  props<{ error: string }>()
);
