import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(`http://localhost:8080/api/user`, user);
  }

  isLoggedIn(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers.has('Authorization'));
    console.log(headers.get('Authorization'));

    return this.http.get(`http://localhost:8080/api/user/refresh`, {
      // tslint:disable-next-line:object-literal-shorthand
      headers: headers
    });
  }

  getUserByToken(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers.has('Authorization'));
    console.log(headers.get('Authorization'));

    return this.http.get(`http://localhost:8080/api/user`, {
      // tslint:disable-next-line:object-literal-shorthand
      headers: headers
    });
  }
}
