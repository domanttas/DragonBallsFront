import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../models/user';
import {AuthGuard} from '../auth.guard';
import {MatDialog, MatDialogRef} from '@angular/material';

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

  constructor(private authService: AuthService,
              private router: Router,
              private authGuard: AuthGuard) {
  }

  ngOnInit() {
    /*
    this.authGuard.isUserTokenValid()
    .then(result => {
        if(result) {
        route}
      })

     */
    /*
    if (this.authGuard.isUserTokenValid()) {
      // TODO: implement message that informs user of their logged in status
      console.log('asdsdsafsdf');
      this.router.navigate(['home']);
    }
    */
    this.authGuard.isUserTokenValid()
      .then(result => {
        if (result) {
          this.router.navigate(['home']);
        }
      });
  }

  loginUser() {
    // event.preventDefault();
    // const target = event.target;
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
        console.log(error.error.message);
      },
      () => {
        console.log('authentication completed');
      }
    );
  }
}

/*
data => {
      if (data.success) {
        this.router.navigate(['home']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert(data.message);
      }
    }
 */
