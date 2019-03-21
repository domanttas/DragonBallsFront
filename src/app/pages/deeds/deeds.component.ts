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
import {Participation} from '../../models/participation';
import {DeedRequest} from '../../models/deed-request';

@Component({
  selector: 'app-deeds',
  templateUrl: './deeds.component.html',
  styleUrls: ['./deeds.component.css']
})
export class DeedsComponent implements OnInit {

  deeds: any;
  user: any;
  username: string;
  userId: number;
  deedDuplicate: DeedRequest;

  constructor(private deedService: DeedService,
              private dialogService: DialogService,
              private userService: UserService,
              private spinner: NgxSpinnerService,
              @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
    this.userService.getUserByToken().toPromise().then(
      response => {
          this.user = response;
          this.username = this.user.username;
          this.userId = this.user.id;
          this.getAllDeeds();
        }, error => {
        this.username = '';
        this.userId = null;
        this.getAllDeeds();
      });
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
      const dialogRef = this.dialogService.openDialog(GoodDeedRegistrationComponent, {});
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

  async registerSolo(deed: Deed) {
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

          if (deed.participation === 'NOT_INTERESTED') {
            this.deedDuplicate = {
              creatorId: deed.creatorId,
              name: deed.name,
              description: deed.description,
              location: deed.location,
              isClosed: deed.isClosed,
              teamLeadId: null,
              category: {
                id: null,
                name: deed.category.name
              },
              contact: {
                name: deed.contact.name,
                email: deed.contact.email,
                phone: deed.contact.phone
              },
              participation: Participation.NOT_INTERESTED.toString(),
              teamUsernames: []
            };
            this.deedService.createDeed(this.deedDuplicate).subscribe();
            await this.registerUserToDeed(deed);
          } else {
            await this.registerUserToDeed(deed);
          }
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

  async editDeed(deed: Deed) {
      const dialogRef = this.dialogService.openDialog(GoodDeedRegistrationComponent, {goodDeed: deed, editMode: true});
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

  async registerUserToDeed(deed: Deed) {
    if (deed.teamLeadId) {
      this.deedService.addUserToDeed(this.user, deed.id).then(
        async response => {
          await this.deedService.getAllDeeds().toPromise().then(
            result => {
              this.deeds = result;
              this.deeds = this.deeds.reverse();
              this.hideSpinner();
            }
          );
        },
        error => {
        }
      );
    } else {
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
  }
}
