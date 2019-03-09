import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-check',
  templateUrl: './error-check.component.html',
  styleUrls: ['./error-check.component.css']
})
export class ErrorCheckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkForError(error): string {
    const ErrorMessages = ['User does not exist',
      'Password is incorrect',
      'User with this username already exists',
      'User with this email already exists'];
    for (let i = 0; i < ErrorMessages.length; i++) {
      if (error === ErrorMessages[i]) {
        return error;
      }
    }
    return 'Something went wrong';
  }
}
