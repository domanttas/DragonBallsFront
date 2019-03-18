import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authToken: any;

  public loggedInStatus: boolean;

  constructor(private http: HttpClient) {
  }

  authenticateUser(user: User): Promise<any> {
    return this.http.post(`https://limitless-eyrie-83209.herokuapp.com/api/user/auth`, user).toPromise().then(
      result => {
        return result;
      },
      error => {
        return error;
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

        this.loggedInStatus = true;
      },
      error => {
        this.loggedInStatus = false;
      }
    );
  }
}
