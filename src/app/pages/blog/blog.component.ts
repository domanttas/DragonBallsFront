import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {DialogService} from '../../services/dialog.service';
import {BlogRegistrationComponent} from '../../dialogs/blog-registration/blog-registration.component';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: any[];

  constructor(private blogService: BlogService,
              private dialogService: DialogService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.blogPosts = [];
    this.getAllBlogPosts();
    // this.blogPosts.push({
    //   id: 1,
    //   imageBytes: 'http://cdn.akc.org/content/hero/pug-breed-header.jpg',
    //   blogText: 'aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa' +
    //     'aaaaa aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaa aaaaaa aaaaa aaaaa' +
    //     'aaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaa aaaa aaaaaaa',
    //   date: '2018-10-10',
    //   user: {
    //     id: 1,
    //     username: 'bbbbbbbbb',
    //     passwordHash: 'bbbbbbbbbb',
    //     emaiL: 'bbbbbbbbbb'
    //   }
    // });
    //
    // this.blogPosts.push({
    //   id: 1,
    //   imageBytes: 'http://cdn.akc.org/content/hero/pug-breed-header.jpg',
    //   blogText: 'aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa' +
    //     'aaaaa aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaa aaaaaa aaaaa aaaaa' +
    //     'aaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaa aaaa aaaaaaa',
    //   date: '2018-10-10',
    //   user: {
    //     id: 1,
    //     username: 'bbbbbbbbb',
    //     passwordHash: 'bbbbbbbbbb',
    //     emaiL: 'bbbbbbbbbb'
    //   }
    // });
    //
    // this.blogPosts.push({
    //   id: 1,
    //   imageBytes: 'http://cdn.akc.org/content/hero/pug-breed-header.jpg',
    //   blogText: 'aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa' +
    //     'aaaaa aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaa aaaaaa aaaaa aaaaa' +
    //     'aaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaa aaaa aaaaaaa',
    //   date: '2018-10-10',
    //   user: {
    //     id: 1,
    //     username: 'bbbbbbbbb',
    //     passwordHash: 'bbbbbbbbbb',
    //     emaiL: 'bbbbbbbbbb'
    //   }
    // });
  }

  editPost(post) {
  }

  deletePost(post) {
  }

  getAllBlogPosts() {
    this.blogService.getAllBlogPosts().then(
      result => {
        this.blogPosts = result;
        console.log(this.blogPosts);
        this.blogPosts.forEach(blogPost =>
          blogPost.imageBytes = this.sanitizer.bypassSecurityTrustUrl(this.imageBytesToString(blogPost)));
        console.log(this.blogPosts);
      },
      error => {

      }
    );
  }

  postBlogPost() {
  }

  updateBlogPost() {
  }

  imageBytesToString(post): string {
    return this.blogService.imageBytesToString(post.imageBytes);
  }

  addPost() {
    const dialogRef = this.dialogService.openDialog(BlogRegistrationComponent, {});
    dialogRef.afterClosed().subscribe(result => {
        this.getAllBlogPosts();
      }
    );
  }
}
