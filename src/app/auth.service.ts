import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetails() {
    //post these details to APIi server return user info if correct
  }
}
