import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog-registration',
  templateUrl: './blog-registration.component.html',
  styleUrls: ['./blog-registration.component.css']
})
export class BlogRegistrationComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(private ngZone: NgZone) {
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
}
