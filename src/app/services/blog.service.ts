import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUri: string = `https://limitless-eyrie-83209.herokuapp.com/`;

  constructor(private http: HttpClient) { }

  createBlogPost(post) {
    return this.this.http.post(this.baseUri + `api/blog`, post);
  }

  getAllBlogPosts() {
    return this.http.get(this.baseUri + `api/blog`);
  }

  updateBlogPost(post) {
    return this.http.post(this.baseUri + `api/blog`, post);
  }

  imageBytesToString(imageBytes) {
    let uints = new Uint8Array(imageBytes);
    let baseString = btoa(String.fromCharCode(null, uints));

    return 'data:image/jpeg;base64,' + baseString;
  }
}
