import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUri: string = `https://limitless-eyrie-83209.herokuapp.com/`;

  constructor(private http: HttpClient) {
  }

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

  deleteBlogPost(id): Promise<any> {
    return this.http.get(this.baseUri + `api/blog/` + id).toPromise().then(
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
    let imageString = '';
    // let baseString = btoa(String.fromCharCode.apply(null, uints));

    for (let i = 0; i < uints.length; i++) {
      imageString += String.fromCharCode(uints[i]);
    }

    // return 'data:image/png;base64,' + baseString;
    return 'data:image/png;base64,' + window.btoa(imageString);
  }

  stringToImageBytes(imageString) {
    let binaryString = atob(imageString);
    // let bytes = new Uint8Array(binaryString.length);
    // let bytes = new Int8Array(binaryString.length);
    let bytes = [];

    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
  }
}
