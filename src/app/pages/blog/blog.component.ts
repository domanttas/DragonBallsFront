import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {DialogService} from '../../services/dialog.service';
import {BlogRegistrationComponent} from '../../dialogs/blog-registration/blog-registration.component';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: any[];
  photoUrls: SafeResourceUrl[];

  constructor(private blogService: BlogService,
              private dialogService: DialogService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.photoUrls = [];
    this.getAllBlogPosts();
  }

  editPost(post) {
  }

  deletePost(post) {
  }

  async getAllBlogPosts() {
    this.blogService.getAllBlogPosts().then(
      async result => {
        this.blogPosts = result;
        for (let blogPost of this.blogPosts) {
          // await this.photoUrls.push(this.sanitizer.bypassSecurityTrustUrl(this.imageBytesToString(blogPost)));
          blogPost.imageString = this.sanitizer.bypassSecurityTrustUrl(this.imageBytesToString(blogPost));
        }
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
