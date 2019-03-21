import {Component, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {BlogService} from '../../services/blog.service';
import {UserService} from '../../services/user.service';
import {Blog} from '../../models/blog';

@Component({
  selector: 'app-blog-registration',
  templateUrl: './blog-registration.component.html',
  styleUrls: ['./blog-registration.component.css']
})
export class BlogRegistrationComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  postPhoto: any;
  displayPhotoUri: any;
  blogPost: Blog;
  user: any;

  errorMessage: string;
  errorPresent: boolean = false;

  constructor(private dialogRef: MatDialogRef<BlogRegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private ngZone: NgZone,
              private sanitizer: DomSanitizer,
              private blogService: BlogService,
              private userService: UserService) {
  }

  duration = new FormControl('', [Validators.required, Validators.max(24), Validators.pattern('[0-9]{1,2}')]);
  description = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.user = this.userService.user;
  }

  getDurationErrorMessage() {
    return this.duration.hasError('required') ? 'You must enter a value' :
      this.duration.hasError('max') ? 'Max 24 hours' :
        this.duration.hasError('pattern') ? 'All characters must be digits' :
          '';
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  async createBlog() {
    if (!this.duration.valid && !this.description.valid && this.postPhoto === undefined) {
      return;
    }

    this.blogPost = {
      duration: this.duration.value,
      blogText: this.description.value,
      user: this.user,
      date: Date.now().toString(),
      imageBytes: this.blogService.stringToImageBytes(this.postPhoto.replace('data:image/png;base64,', ''))
    };
    console.log(this.blogPost);

    await this.blogService.createBlogPost(this.blogPost).then(
      result => {
        this.cancelBlogPost();
      },
      error => {
        this.errorPresent = true;
        this.errorMessage = error.error.message;
      }
    );
  }

  cancelBlogPost() {
    this.dialogRef.close();
  }

  photoPicker(postPhoto) {
    let file = postPhoto.target.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.postPhoto = fileReader.result;
      console.log(this.postPhoto);
      // this.displayPhotoUri = this.sanitizer.bypassSecurityTrustResourceUrl(this.postPhoto);
      // console.log(this.displayPhotoUri);
    };

    fileReader.readAsDataURL(file);
  }
}
