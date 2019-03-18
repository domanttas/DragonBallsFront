import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(component, dialogConfig) {
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    return this.dialog.open(component, dialogConfig);
  }

  checkForError(error): string {
    const ErrorMessages = ['User does not exist',
      'Password is incorrect',
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
