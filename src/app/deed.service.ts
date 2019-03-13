import { Injectable } from '@angular/core';
import { Deed } from './models/deed';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeedService {

  constructor(private http: HttpClient) { }

  createDeed(deed: Deed) {
    return this.http.post(`https://limitless-eyrie-83209.herokuapp.com/api/deed`, deed);
  }
}
