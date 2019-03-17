import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../user.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isUserLoggedIn: boolean;
  user: User;

  constructor(private userService: UserService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.isUserTokenValid();
    this.getUserByToken();
  }

  isUserTokenValid() {
    this.authService.isUserTokenValid()
      .then(result => {
        if (result) {
          this.isUserLoggedIn = true;
        } else {
          this.isUserLoggedIn = false;
        }
      });
  }

  getUserByToken() {
    this.userService.getUserByToken().toPromise().then(
      result => {
        if (result) {
          this.user = result;
        }
      }
    );
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
