import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../models/user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {DialogService} from '../dialog.service';
import {MatDialogConfig} from '@angular/material';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]);
  password = new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(12)]);
  passwordConfirm = new FormControl('', [Validators.required, Validators.email]);
  person: User;

  constructor(private service: UserService,
              private router: Router,
              private dialogService: DialogService) {
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
        this.username.hasError('maxlength') ? 'Max 20 characters' :
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
    } else {
      return '';
    }
  }

  signUp() {
    if (!this.username.valid || !this.password.valid || !this.email.valid || this.password.value !== this.passwordConfirm.value) {
      return;
    }

    this.person = {
      username: this.username.value,
      email: this.email.value,
      passwordHash: this.password.value,
      teamLead: false
    };

    this.service.createUser(this.person).subscribe(
      response => {
        this.router.navigate(['home']);
        this.dialogService.openDialog(ErrorDialogComponent,
          {description: 'Registration successful'});
      },
      error => {
        this.dialogService.openDialog(ErrorDialogComponent,
          {description: this.dialogService.checkForError(error.error.message)});
      }
    );
  }
}
