import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {User} from "../model/user";
import {Credentials} from "../model/credentials";

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

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.value.username && this.loginForm.value.password) {
      const cred: Credentials = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      this.loginService.login(cred
      ).subscribe(
        (response) => {
          console.log(response);
          this.router.navigateByUrl('products');
          this.user = response;
        },
        () => {
          alert("Login unsuccessful! Please Retry!");
        }
      )
    }
  }
}
