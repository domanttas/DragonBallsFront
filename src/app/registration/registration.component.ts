import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../models/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required, Validators.minLength(5)]);
  password = new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(12)]);
  passwordConfirm = new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(12)]);
  isPasswordMatching: boolean;
  person: User;

  constructor(private service: UserService) {
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
        if (this.passwordConfirm.hasError('required')) {
          return 'You must enter a value';
      }
        if (this.passwordConfirm.value !== this.password.value) {
          return 'Passwords must match';
        }

      }

  signUp() {
    this.person = {
      username: this.username.value,
      email: this.email.value,
      passwordHash: this.password.value
    };

    this.service.createUser(this.person).subscribe(
      response => {
        console.log(response);

        // TODO: Route to home page
      },
      error => {
        // TODO: error displaying

        console.log(error.error.message);
      },
      () => {
        console.log('done');
      }
    );
  }
}
