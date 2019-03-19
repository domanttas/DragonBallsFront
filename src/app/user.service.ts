import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;
  public isLoggedIn: boolean;

  authToken: any;

  constructor(private http: HttpClient) {
  }

  createUser(user: User) {
    return this.http.post(`https://limitless-eyrie-83209.herokuapp.com/api/user/create`, user);
  }

  getUserByToken(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get(`https://limitless-eyrie-83209.herokuapp.com/api/user`, {
      headers: headers
    });
  }

  getUserDetails(): Promise<any> {
    return this.getUserByToken().toPromise().then(
      result => {
        this.user = result;
      }
    );
  }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`https://limitless-eyrie-83209.herokuapp.com/api/user/` + username);
  }

  authenticateUser(user: User): Promise<any> {
    return this.http.post(`https://limitless-eyrie-83209.herokuapp.com/api/user/auth`, user).toPromise().then(
      result => {
        // return result;
        return Promise.resolve(result);
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  refreshUserToken(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get(`https://limitless-eyrie-83209.herokuapp.com/api/user/refresh`, {
      headers: headers
    });
  }

  isUserLoggedIn(): Promise<any> {
    return this.refreshUserToken().toPromise().then(
      res => {
        this.authToken = res.token;

        localStorage.removeItem('token');
        localStorage.setItem('token', this.authToken);

        this.isLoggedIn = true;
      },
      error => {
        this.isLoggedIn = false;
        this.user = undefined;
        return Promise.reject();
      }
    );
  }
}
