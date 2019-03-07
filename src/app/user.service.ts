import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user';

interface MyData {
  message: string;
  success: boolean;
}

interface IsLoggedIn {
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(`http://localhost:8080/api/user`, user);
  }

  getConfirmationData() {
    return this.http.get<MyData>('');
  }

  isLoggedIn() {
    return this.http.get<IsLoggedIn>('');
  }
}
