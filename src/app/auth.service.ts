import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  // get isLoggedIn() {
  //   return this.loggedInStatus;
  // }

  getIsLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(user: User): Observable<any> {
    // post these details to APIi server return user info if correct
    return this.http.post(`http://localhost:8080/api/user/auth`, user);
  }
}
