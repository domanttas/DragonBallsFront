import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  matDialogConfig: MatDialogConfig = new MatDialogConfig();

  constructor(public dialog: MatDialog) {
  }

  openDialog(component, data) {
    this.matDialogConfig.disableClose = true;
    this.matDialogConfig.autoFocus = true;
    this.matDialogConfig.data = data;

    return this.dialog.open(component, this.matDialogConfig);
  }

  checkForError(error): string {
    const ErrorMessages = ['User does not exist',
      'Password is incorrect',
      'User email is not valid',
      'User with this username already exists',
      'User with this email already exists',
      'No team members provided',
      'DeedRequest does not exist'];
    for (let i = 0; i < ErrorMessages.length; i++) {
      if (error === ErrorMessages[i]) {
        return error;
      }
    }
    return 'Something went wrong';
  }
}
