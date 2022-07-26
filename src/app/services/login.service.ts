import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../model/user";
import {Credentials} from "../model/credentials";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: User | undefined;

  redirectUrl: string | null = null;

  constructor(private http: HttpClient) { }

  login(credentials: Credentials) : Observable<User>
  {
    return this.http.post<User>(environment.loginURL, credentials).pipe(tap((user) => this.loggedUser = user));
  }

  isLoggedIn() : boolean{
    return this.loggedUser!=undefined;
  }

  getUsername() : string {
    if(this.loggedUser)
      return this.loggedUser.username;
    else return "";

  }
}
