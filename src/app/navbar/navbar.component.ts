import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.isUserLoggedIn().then(
      result => {
        this.userService.getUserDetails().then(
          userResult => {
          }
        );
      }
    );
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
