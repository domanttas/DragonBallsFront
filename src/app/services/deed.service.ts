import { Injectable } from '@angular/core';
import { DeedRequest } from '../models/deed-request';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Deed} from '../models/deed';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeedService {

  private baseUri: string = `https://limitless-eyrie-83209.herokuapp.com/`;

  constructor(private http: HttpClient) { }

  createDeed(deed: DeedRequest): Observable<any> {
    return this.http.post(this.baseUri + `api/deed`, deed);
  }

  getTeamLeadId(deedId: number) {
    return this.http.get(this.baseUri + `api/deed/` + deedId);
  }

  updateDeed(deed: Deed) {
    return this.http.post(this.baseUri + `api/deed/update`, deed);
  }

  addUserToDeed(user: User, id: number) {
    return this.http.post(this.baseUri + `api/deed/add/` + id, user).toPromise().then(
      response => {
        return Promise.resolve(response);
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  getAllDeeds() {
    return this.http.get(this.baseUri + `api/deed`);
  }

  deactivateDeed(deedId: number) {
    return this.http.get( this.baseUri + `api/deed/delete/` + deedId);
  }
}
