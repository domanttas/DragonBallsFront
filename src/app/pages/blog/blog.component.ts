import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {DialogService} from '../../services/dialog.service';
import {BlogRegistrationComponent} from '../../dialogs/blog-registration/blog-registration.component';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {UserService} from '../../services/user.service';
import {ErrorDialogComponent} from '../../dialogs/error-dialog/error-dialog.component';
import {NgxSpinnerService} from 'ngx-spinner';

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
              private sanitizer: DomSanitizer,
              private userService: UserService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.photoUrls = [];
    this.getAllBlogPosts();
  }

  editPost(post) {
    if (post.user.id !== this.userService.user.id) {
      this.dialogService.openDialog(ErrorDialogComponent, {description: 'You can only delete your own posts'});
      return;
    }

    const dialogRef = this.dialogService.openDialog(BlogRegistrationComponent, {blogPost: post, editMode: true});
    dialogRef.afterClosed().subscribe(result => {
        this.getAllBlogPosts();
        this.blogPosts = this.blogPosts.reverse();
      }
    );
  }

  async deletePost(post) {
    if (this.userService.user === undefined) {
      this.dialogService.openDialog(ErrorDialogComponent, {description: 'Please log in'});
      return;
    }

    if (post.user.id !== this.userService.user.id) {
      this.dialogService.openDialog(ErrorDialogComponent, {description: 'You can only delete your own posts'});
      return;
    }
    this.spinner.show();
    this.blogService.deleteBlogPost(post.id).then(
      async result => {
        await this.getAllBlogPosts();
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
      });
  }

  async getAllBlogPosts() {
    this.spinner.show();
    this.blogService.getAllBlogPosts().then(
      async result => {
        this.blogPosts = result;
        for (let blogPost of this.blogPosts) {
          // await this.photoUrls.push(this.sanitizer.bypassSecurityTrustUrl(this.imageBytesToString(blogPost)));
          blogPost.imageString = this.sanitizer.bypassSecurityTrustUrl(this.imageBytesToString(blogPost));
        }
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
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
    if (this.userService.user === undefined) {
      this.dialogService.openDialog(ErrorDialogComponent, {description: 'Please log in'});
      return;
    }

    const dialogRef = this.dialogService.openDialog(BlogRegistrationComponent, {editMode: false});
    dialogRef.afterClosed().subscribe(result => {
        this.getAllBlogPosts();
        this.blogPosts = this.blogPosts.reverse();
      }
    );
  }
}
