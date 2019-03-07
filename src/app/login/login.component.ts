import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../models/user';

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

  constructor(private Auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
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

    this.Auth.getUserDetails(this.user).subscribe(
      response => {
        // TODO: handle routing
        this.authToken = response.token;
        console.log(this.authToken);
        localStorage.setItem('token', this.authToken);
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
