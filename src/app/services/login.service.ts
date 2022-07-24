import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../model/user";
import {Credentials} from "../model/credentials";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL = 'http://localhost:3000/login';

  loggedUser: User | undefined;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  constructor(private http: HttpClient) { }

  login(credentials: Credentials) : Observable<User>
  {
    return this.http.post<User>(this.loginURL, credentials).pipe(tap((user) => this.loggedUser = user));
  }

  isLoggedIn() : boolean{
    return this.loggedUser!=undefined;
  }

  isAdmin() : boolean
  {
    return this.loggedUser?.roles.includes("admin") == true;
  }

  isCostumer() : boolean
  {
    return this.loggedUser?.roles.includes("customer") == true;
  }
}
