import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {User} from '../models/user';
import {UserService} from '../user.service';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';
import {MatDialogConfig} from '@angular/material';
import {DialogService} from '../dialog.service';

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

  dialogConfig: MatDialogConfig;

  constructor(private userService: UserService,
              private dialogService: DialogService,
              private router: Router) {
  }

  ngOnInit() {
    this.dialogConfig = new MatDialogConfig();
  }

  async loginUser() {
    const fetchedUsername = this.username.value;
    const fetchedPassword = this.password.value;

    if (fetchedUsername === '' && fetchedPassword === '') {
      this.dialogConfig.data = {
        description: 'Input fields are empty, use your username and password to log in'
      };
      this.dialogService.openDialog(ErrorDialogComponent, this.dialogConfig);
      return;
    }

    this.user = {
      username: fetchedUsername,
      passwordHash: fetchedPassword,
      teamLead: false
    };

    this.userService.authenticateUser(this.user).then(
      async response => {
        this.authToken = response.token;
        localStorage.setItem('token', this.authToken);

        await this.getUserDetails();
        await this.isUserLoggedIn();

        this.router.navigate(['home']);
      },
      error => {
        this.dialogConfig.data = {
          description: this.dialogService.checkForError(error.error.message)
        };
        this.dialogService.openDialog(ErrorDialogComponent, this.dialogConfig);
      }
    );
  }

  async getUserDetails() {
    await this.userService.getUserDetails();
  }

  async isUserLoggedIn() {
    await this.userService.isUserLoggedIn();
  }
}
