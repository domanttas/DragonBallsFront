import {Component, OnInit} from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {AuthService} from '../auth.service';
import {DeedService} from '../deed.service';
import {Deed} from '../models/deed';
import {UserService} from '../user.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../models/user';

@Component({
  selector: 'app-deeds',
  templateUrl: './deeds.component.html',
  styleUrls: ['./deeds.component.css']
})
export class DeedsComponent implements OnInit {
  isLoggedIn: boolean;
  deeds: any;
  user: any;

  constructor(private dialog: DialogComponent,
              private authService: AuthService,
              private deedService: DeedService,
              private userService: UserService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.isUserLoggedIn();
    this.getAllDeeds();
  }

  getAllDeeds() {
    this.spinner.show();
    this.deedService.getAllDeeds().subscribe(
      response => {
        this.deeds = response;
        this.hideSpinner();
      },
      error => {
        this.spinner.hide();
      }
    );
  }

  openTeamRegistration(deed: Deed) {
    if (this.isLoggedIn) {
      this.dialog.openTeamDialog(deed);
    } else {
      this.dialog.openDialog('Please log in!');
    }
  }

  addNewDeed() {
    if (this.isLoggedIn) {
      this.dialog.openDeedRegistrationDialog();
    } else {
      this.dialog.openDialog('Please log in!');
    }
  }

  isUserLoggedIn(): any {
    this.authService.isUserTokenValid()
      .then(result => {
        if (result) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
  }

  registerSolo(deed: Deed) {
    if (!this.isLoggedIn) {
      this.dialog.openDialog('Please log in!');
      return;
    }
    this.spinner.show();
    this.userService.getUserByToken().toPromise().then(
      res => {
        if (res) {
          this.user = res;
          for (let user of deed.users) {
            if ((user as User).username === this.user.username) {
              this.hideSpinner();
              this.dialog.openDialog('You are already registered to this deed!');
              return;
            }
          }
          this.deedService.addUserToDeed(this.user, deed.id).toPromise().then(
            response => {
              if (response) {
              }
            },
            error => {
              this.dialog.openDialog(error.error.message);
            }
          );
        }
      },
      error => {
        this.dialog.openDialog(error.error.message);
      }
    );
    this.hideSpinner();
  }

  hideSpinner() {
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }
}
