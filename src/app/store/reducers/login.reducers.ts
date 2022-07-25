import {createReducer, on} from "@ngrx/store";
import {initialLoginState} from "../state/login.state";
import {loginUser, loginUserFailure, loginUserSuccess} from "../actions/login.actions";


export const loginReducers = createReducer(
  initialLoginState,
  on(loginUser, (state) => ({
    ...state,
    status: 'loading'
  })),
  on(loginUserSuccess, (state, { user }) => ({
    ...state,
    loggedUser: user,
    status: 'success'
  })),
  on(loginUserFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error'
  }))
)
