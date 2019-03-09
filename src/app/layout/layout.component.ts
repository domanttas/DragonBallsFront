import {Component, OnInit} from '@angular/core';
import {AuthGuard} from '../auth.guard';
import {User} from '../models/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isUserLoggedIn: boolean;
  user: User;

  constructor(private authGuard: AuthGuard, private userService: UserService) {
  }

  ngOnInit() {
    this.isUserTokenValid();
    this.getUserByToken();
  }
  isUserTokenValid() {
    this.authGuard.isUserTokenValid()
      .then(result => {
        if (result) {
          this.isUserLoggedIn = true;
          console.log(this.isUserLoggedIn);
        } else {
          this.isUserLoggedIn = false;
          console.log(this.isUserLoggedIn);
        }
      });
  }
  getUserByToken() {
    /*
    this.userService.getUserByToken()
      .then(result => {
       if (result) {
         this.user = result;
       }
      });
      */
    this.userService.getUserByToken().toPromise().then(
      result => {
        if (result) {
          this.user = result;
        }
      }
    );
  }
}
