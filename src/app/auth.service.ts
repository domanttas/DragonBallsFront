import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedInStatus = false;
  authToken: any;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  getUserDetails(user: User): Observable<any> {
    return this.http.post(`https://limitless-eyrie-83209.herokuapp.com/api/user/auth`, user);
  }

  isLoggedIn(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get(`https://limitless-eyrie-83209.herokuapp.com/api/user/refresh`, {
      // tslint:disable-next-line:object-literal-shorthand
      headers: headers
    });
  }

  isUserTokenValid(): Promise<boolean> {
    return this.isLoggedIn().toPromise().then(
      res => {
        this.authToken = res.token;

        localStorage.removeItem('token');
        localStorage.setItem('token', this.authToken);

        console.log(this.authToken);
        return true;
      },
      error => {
        console.log(error.error.message);
        return false;
      }
    );
  }
}
