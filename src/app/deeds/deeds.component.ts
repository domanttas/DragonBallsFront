import {Component, Inject, OnInit} from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {AuthService} from '../auth.service';
import {DeedService} from '../deed.service';
import {Deed} from '../models/deed';
import {UserService} from '../user.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../models/user';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Participation} from '../models/participation';

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
              private spinner: NgxSpinnerService,
              @Inject(MAT_DIALOG_DATA) data) {
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
        this.deeds = this.deeds.reverse();
        this.hideSpinner();
      },
      error => {
        this.spinner.hide();
      }
    );
  }

  openTeamRegistration(deed: Deed) {
    if (this.isLoggedIn) {
      const dialogRef = this.dialog.openTeamDialog(deed);
      dialogRef.afterClosed().subscribe(async result => {
          this.spinner.show();
          await this.deedService.getAllDeeds().toPromise().then(
            response => {
              this.deeds = response;
              this.deeds = this.deeds.reverse();
              this.hideSpinner();
            }
          );
        }
      );
    } else {
      this.dialog.openDialog('Please log in!');
    }
  }

  addNewDeed() {
    if (this.isLoggedIn) {
      const dialogRef = this.dialog.openDeedRegistrationDialog(this.deeds);
      dialogRef.afterClosed().subscribe(async result => {
          this.spinner.show();
          await this.deedService.getAllDeeds().toPromise().then(
            response => {
              this.deeds = response;
              this.deeds = this.deeds.reverse();
              this.hideSpinner();
            }
          );
        }
      );
      console.log(this.deeds);
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
      async res => {
        if (res) {
          this.user = res;
          for (let user of deed.users) {
            if ((user as User).username === this.user.username) {
              this.hideSpinner();
              this.dialog.openDialog('You are already registered to this deed!');
              return;
            }
          }

          const dialogRef = this.dialog.openSoloRegisterConfirmationDialog(deed, this.user);
          dialogRef.afterClosed().subscribe(async result => {
              this.spinner.show();
              await this.deedService.getAllDeeds().toPromise().then(
                response => {
                  this.deeds = response;
                  this.deeds = this.deeds.reverse();
                  this.hideSpinner();
                }
              );
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
