import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {User} from "../model/user";
import {Credentials} from "../model/credentials";
import {AppState} from "../store/state/app.state";
import {Store} from "@ngrx/store";
import {loginUser} from "../store/actions/login.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  user : User | undefined;

  constructor(private loginService : LoginService, private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    if(this.loginForm.value.username && this.loginForm.value.password) {
      const cred: Credentials = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      this.store.dispatch(loginUser({credentials: cred}));
    }
  }

}
