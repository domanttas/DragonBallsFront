import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {DeedService} from '../deed.service';
import {Deed} from '../models/deed';
import {UserService} from '../user.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../models/user';
import {MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {DialogService} from '../dialog.service';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';
import {GoodDeedRegistrationComponent} from '../good-deed-registration/good-deed-registration.component';
import {TeamRegistrationComponent} from '../deeds-team-registration/team-registration.component';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-deeds',
  templateUrl: './deeds.component.html',
  styleUrls: ['./deeds.component.css']
})
export class DeedsComponent implements OnInit {

  deeds: any;
  user: any;

  dialogConfig: MatDialogConfig;

  constructor(private authService: AuthService,
              private deedService: DeedService,
              private dialogService: DialogService,
              private userService: UserService,
              private spinner: NgxSpinnerService,
              @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
    this.getAllDeeds();

    this.dialogConfig = new MatDialogConfig();
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
    if (this.userService.loggedInStatus) {
      this.dialogConfig.data = {
        goodDeed: deed
      };
      const dialogRef = this.dialogService.openDialog(TeamRegistrationComponent, this.dialogConfig);
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
      this.dialogConfig.data = {
        description: 'Please log in!'
      };

      this.dialogService.openDialog(ErrorDialogComponent, this.dialogConfig);
    }
  }

  addNewDeed() {
    if (this.userService.loggedInStatus) {
      this.dialogConfig.data = {
        deedList: this.deeds
      };
      const dialogRef = this.dialogService.openDialog(GoodDeedRegistrationComponent, this.dialogConfig);
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
      this.dialogConfig.data = {
        description: 'Please log in!'
      };

      this.dialogService.openDialog(ErrorDialogComponent, this.dialogConfig);
    }
  }

  registerSolo(deed: Deed) {
    if (!this.userService.loggedInStatus) {
      this.dialogConfig.data = {
        description: 'Please log in!'
      };

      this.dialogService.openDialog(ErrorDialogComponent, this.dialogConfig);

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

              this.dialogConfig.data = {
                description: 'You are already registered to this deed!'
              };
              this.dialogService.openDialog(ErrorDialogComponent, this.dialogConfig);

              return;
            }
          }

          this.dialogConfig.data = {
            goodDeed: deed,
            registeredUser: this.user
          };
          const dialogRef = this.dialogService.openDialog(ConfirmationDialogComponent, this.dialogConfig);

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
        this.dialogConfig.data = {
          description: error.error.message
        };
        this.dialogService.openDialog(ErrorDialogComponent, this.dialogConfig);
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
