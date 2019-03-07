import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from './models/person';

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

  createUser(user: Person) {
    return this.http.post(`http://localhost:8080/api/user`, user);
  }

  getConfirmationData() {
    return this.http.get<MyData>('');
  }

  isLoggedIn() {
    return this.http.get<IsLoggedIn>('');
  }
}
