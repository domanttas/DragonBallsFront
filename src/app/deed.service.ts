import { Injectable } from '@angular/core';
import { DeedRequest } from './models/deed-request';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DeedService {

  constructor(private http: HttpClient) { }

  createDeed(deed: DeedRequest) {
    return this.http.post(`https://limitless-eyrie-83209.herokuapp.com/api/deed`, deed);
  }

  getTeamLeadId(deedId: number) {
    return this.http.get(`https://limitless-eyrie-83209.herokuapp.com/api/deed/` + deedId);
  }

  addUserToDeed(user: User, deedId: number) {
    return this.http.put(`https://limitless-eyrie-83209.herokuapp.com/api/deed/` + deedId, user);
  }

  updateDeed(deed: DeedRequest) {
    return this.http.put(`https://limitless-eyrie-83209.herokuapp.com/api/deed/update`, deed);
  }

  getAllDeeds() {
    return this.http.get(`https://limitless-eyrie-83209.herokuapp.com/api/deed`);
  }

  closeDeedById(deedId: number) {
    return this.http.delete(`https://limitless-eyrie-83209.herokuapp.com/api/deed` + deedId);
  }
}
