import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';
import {GoodDeedRegistrationComponent} from '../good-deed-registration/good-deed-registration.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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

  openDeedRegistrationDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(GoodDeedRegistrationComponent, dialogConfig);
  }
}
