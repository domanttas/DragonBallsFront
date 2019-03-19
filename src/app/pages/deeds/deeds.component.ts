import {Component, Inject, OnInit} from '@angular/core';
import {DeedService} from '../../services/deed.service';
import {Deed} from '../../models/deed';
import {UserService} from '../../services/user.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {User} from '../../models/user';
import {MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {DialogService} from '../../services/dialog.service';
import {ErrorDialogComponent} from '../../dialogs/error-dialog/error-dialog.component';
import {GoodDeedRegistrationComponent} from '../../dialogs/good-deed-registration/good-deed-registration.component';
import {TeamRegistrationComponent} from '../../dialogs/deeds-team-registration/team-registration.component';
import {ConfirmationDialogComponent} from '../../dialogs/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-deeds',
  templateUrl: './deeds.component.html',
  styleUrls: ['./deeds.component.css']
})
export class DeedsComponent implements OnInit {

  deeds: any;
  user: any;

  constructor(private deedService: DeedService,
              private dialogService: DialogService,
              private userService: UserService,
              private spinner: NgxSpinnerService,
              @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
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
    if (this.userService.isLoggedIn) {
      const dialogRef = this.dialogService.openDialog(TeamRegistrationComponent, {goodDeed: deed});
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
      this.dialogService.openDialog(ErrorDialogComponent, {description: 'Please log in!'});
    }
  }

  addNewDeed() {
    if (this.userService.isLoggedIn) {
      const dialogRef = this.dialogService.openDialog(GoodDeedRegistrationComponent, {deedList: this.deeds});
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
      this.dialogService.openDialog(ErrorDialogComponent, {description: 'Please log in!'});
    }
  }

  registerSolo(deed: Deed) {
    if (!this.userService.isLoggedIn) {
      this.dialogService.openDialog(ErrorDialogComponent, {description: 'Please log in!'});

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

              this.dialogService.openDialog(ErrorDialogComponent, {description: 'You are already registered to this deed!'});

              return;
            }
          }

          const dialogRef = this.dialogService.openDialog(ConfirmationDialogComponent, {goodDeed: deed, registeredUser: this.user});
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
        this.dialogService.openDialog(ErrorDialogComponent, {description: error.error.message});
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
