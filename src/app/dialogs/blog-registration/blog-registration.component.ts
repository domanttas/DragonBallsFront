import {Component, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-blog-registration',
  templateUrl: './blog-registration.component.html',
  styleUrls: ['./blog-registration.component.css']
})
export class BlogRegistrationComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  postPhoto: any;
  displayPhotoUri: any;

  constructor(private dialogRef: MatDialogRef<BlogRegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private ngZone: NgZone,
              private sanitizer: DomSanitizer) {
  }

  duration = new FormControl('', [Validators.required, Validators.max(24), Validators.pattern('[0-9]{1,2}')]);

  ngOnInit() {
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

  createBlog() {
  }

  cancelBlogPost() {
    this.dialogRef.close();
  }

  photoPicker(postPhoto) {
    let file = postPhoto.target.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.postPhoto = fileReader.result;
      this.displayPhotoUri = this.sanitizer.bypassSecurityTrustResourceUrl(this.postPhoto);
    };

    fileReader.readAsDataURL(file);
  }
}
