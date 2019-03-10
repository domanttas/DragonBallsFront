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

  getUserDetails(user: User): Observable<any> {
    return this.http.post(`http://localhost:8080/api/user/auth`, user);
  }
}
