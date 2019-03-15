import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  createUser(user: User) {
    return this.http.post(`https://limitless-eyrie-83209.herokuapp.com/api/user/create`, user);
  }

  getUserByToken(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    console.log(headers.has('Authorization'));
    console.log(headers.get('Authorization'));

    return this.http.get(`https://limitless-eyrie-83209.herokuapp.com/api/user`, {
      // tslint:disable-next-line:object-literal-shorthand
      headers: headers
    });
  }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`https://limitless-eyrie-83209.herokuapp.com/api/user/` + username);
  }

  // getUserByUsernameWrapper(username: string): Promise<User> {
  //   this.getUserByUsername(username).toPromise().then(
  //     response => {
  //       return response;
  //     },
  //     error => {
  //       return null;
  //     }
  //   );
  // }
}
