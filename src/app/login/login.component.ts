import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../models/user';
import {AuthGuard} from '../auth.guard';
import {DialogComponent} from '../dialog/dialog.component';
import {ErrorCheckComponent} from '../error-check/error-check.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');

  user: User;

  authToken: any;
  @Input() description: string;

  constructor(private authService: AuthService,
              private router: Router,
              private authGuard: AuthGuard,
              private dialog: DialogComponent,
              private errorCheck: ErrorCheckComponent) {
  }

  ngOnInit() { }

  loginUser() {
    const fetchedUsername = this.username.value;
    const fetchedPassword = this.password.value;

    console.log(fetchedUsername, fetchedPassword);

    this.user = {
      username: fetchedUsername,
      passwordHash: fetchedPassword
    };

    this.authService.getUserDetails(this.user).subscribe(
      response => {
        this.authToken = response.token;
        console.log(this.authToken);
        localStorage.setItem('token', this.authToken);

        this.authService.setLoggedIn(true);

        this.router.navigate(['home']);
      },
      error => {
        this.dialog.openDialog(this.errorCheck.checkForError(error.error.message));
        console.log(error.error.message);
      },
      () => {
        console.log('authentication completed');
      }
    );
  }
}
