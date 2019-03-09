import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../models/user';
import {AuthGuard} from '../auth.guard';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';

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
              public dialog: MatDialog) {
  }

  ngOnInit() {
  }

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
        // TODO: error displaying
        this.openDialog();
        console.log(error.error.message);
      },
      () => {
        console.log('authentication completed');
      }
    );
  }

   openDialog(): void {
     const dialogConfig = new MatDialogConfig();

     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;

     dialogConfig.data = {
       description: 'Incorrect username or password!'
     };

     this.dialog.open(ErrorDialogComponent, dialogConfig);

   }
}
