import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: any[];

  constructor() {
  }

  ngOnInit() {
    this.blogPosts = [];
    this.blogPosts.push({
      id: 1,
      imageBytes: 'http://cdn.akc.org/content/hero/pug-breed-header.jpg',
      blogText: 'aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa' +
        'aaaaa aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaa aaaaaa aaaaa aaaaa' +
        'aaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaa aaaa aaaaaaa',
      date: '2018-10-10',
      user: {
        id: 1,
        username: 'bbbbbbbbb',
        passwordHash: 'bbbbbbbbbb',
        emaiL: 'bbbbbbbbbb'
      }
    });

    this.blogPosts.push({
      id: 1,
      imageBytes: 'http://cdn.akc.org/content/hero/pug-breed-header.jpg',
      blogText: 'aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa' +
        'aaaaa aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaa aaaaaa aaaaa aaaaa' +
        'aaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaa aaaa aaaaaaa',
      date: '2018-10-10',
      user: {
        id: 1,
        username: 'bbbbbbbbb',
        passwordHash: 'bbbbbbbbbb',
        emaiL: 'bbbbbbbbbb'
      }
    });

    this.blogPosts.push({
      id: 1,
      imageBytes: 'http://cdn.akc.org/content/hero/pug-breed-header.jpg',
      blogText: 'aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa' +
        'aaaaa aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaa aaaaaa aaaaa aaaaa' +
        'aaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaa aaaa aaaaaaa',
      date: '2018-10-10',
      user: {
        id: 1,
        username: 'bbbbbbbbb',
        passwordHash: 'bbbbbbbbbb',
        emaiL: 'bbbbbbbbbb'
      }
    });
  }

  editPost(post) {
  }

  deletePost(post) {
  }
}
