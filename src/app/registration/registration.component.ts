import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../models/user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {DialogComponent} from '../dialog/dialog.component';
import {ErrorCheckComponent} from '../error-check/error-check.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required, Validators.minLength(5)]);
  password = new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(12)]);
  passwordConfirm = new FormControl('', [Validators.required, Validators.email]);
  person: User;

  constructor(private service: UserService,
              private router: Router,
              private dialog: DialogComponent,
              private errorCheck: ErrorCheckComponent) {
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getUsernameErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' :
      this.username.hasError('minlength') ? 'Min 5 characters' :
        '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('minlength') ? 'Min 7 characters' :
        this.password.hasError('maxlength') ? 'Max 12 characters' :
          '';
  }

  getPasswordMatchErrorMessage() {
        if (this.passwordConfirm.value !== this.password.value) {
          return 'Passwords must match';
        }
      }

  signUp() {
    if (!this.username.valid || !this.password.valid || !this.email.valid) {
      return;
    }

    this.person = {
      username: this.username.value,
      email: this.email.value,
      passwordHash: this.password.value
    };

    this.service.createUser(this.person).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['home']);
      },
      error => {
        this.dialog.openDialog(this.errorCheck.checkForError(error.error.message));
        console.log(error.error.message);
      },
      () => {
        console.log('done');
      }
    );
  }
}
