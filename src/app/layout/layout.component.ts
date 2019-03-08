import {Component, OnInit} from '@angular/core';
import {AuthGuard} from '../auth.guard';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isUserLoggedIn: boolean;

  constructor(private authGuard: AuthGuard) {
  }

  ngOnInit() {
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
}
