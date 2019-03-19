import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {ErrorDialogComponent} from '../../dialogs/error-dialog/error-dialog.component';
import {DialogService} from '../../services/dialog.service';

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

  constructor(private userService: UserService,
              private dialogService: DialogService,
              private router: Router) {
  }

  ngOnInit() {
  }

  async loginUser() {
    const fetchedUsername = this.username.value;
    const fetchedPassword = this.password.value;

    if (fetchedUsername === '' && fetchedPassword === '') {
      this.dialogService.openDialog(ErrorDialogComponent,
        {description: 'Input fields are empty, use your username and password to log in'});
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
        this.dialogService.openDialog(ErrorDialogComponent,
          {description: this.dialogService.checkForError(error.error.message)});
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
