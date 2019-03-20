import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUri: string = `https://limitless-eyrie-83209.herokuapp.com/`;

  constructor(private http: HttpClient) { }

  createBlogPost(post): Promise<any> {
    return this.http.post(this.baseUri + `api/blog`, post).toPromise().then(
      result => {
        return Promise.resolve();
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  getAllBlogPosts(): Promise<any> {
    return this.http.get(this.baseUri + `api/blog`).toPromise().then(
      result => {
        return Promise.resolve(result);
      },
      error => {
        return Promise.reject();
      }
    );
  }

  updateBlogPost(post): Promise<any> {
    return this.http.post(this.baseUri + `api/blog`, post).toPromise().then(
      result => {
        return Promise.resolve(result);
      },
      error => {
        return Promise.reject();
      }
    );
  }

  imageBytesToString(imageBytes) {
    let uints = new Uint8Array(imageBytes);
    let baseString = btoa(String.fromCharCode.apply(null, uints));

    return 'data:image/jpeg;base64,' + baseString;
  }

  stringToImageBytes(imageString) {
    let binaryString = atob(imageString);
    // let bytes = new Uint8Array(binaryString.length);
    let bytes = new Int8Array(binaryString.length);

    for(let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
  }
}
