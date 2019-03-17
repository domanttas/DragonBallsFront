import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';
import {GoodDeedRegistrationComponent} from '../good-deed-registration/good-deed-registration.component';
import {TeamRegistrationComponent} from '../deeds-team-registration/team-registration.component';
import {DeedService} from '../deed.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private deedService: DeedService) {
  }

  ngOnInit() {
  }

  openDialog(error): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      description: error
    };

    this.dialog.open(ErrorDialogComponent, dialogConfig);
  }

  openDeedRegistrationDialog(deeds) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      deedList: deeds
    };

    return this.dialog.open(GoodDeedRegistrationComponent, dialogConfig);
  }

  openTeamDialog(deed) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      goodDeed: deed
    };

    return this.dialog.open(TeamRegistrationComponent, dialogConfig);
  }
}
