import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Deed} from '../models/deed';
import {UserService} from '../user.service';
import {DeedService} from '../deed.service';
import {User} from '../models/user';
import {error} from 'util';

@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.css']
})
export class TeamRegistrationComponent implements OnInit {

  userName: FormControl;
  formControlList: FormControl[];
  userNames: string[];
  deed: any;
  user: any;
  users: User[];
  userNameErrorMessage: boolean;

  constructor(private dialogRef: MatDialogRef<TeamRegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private userService: UserService,
              private deedService: DeedService) {
    this.deed = data.goodDeed;
  }

  ngOnInit() {
    this.userName = new FormControl('', [Validators.required]);
    this.userNames = [];
    this.formControlList = [];
    this.users = [];
    this.formControlList.push(this.userName);
  }

  cancel() {
    this.dialogRef.close();
  }

  addNewUsername() {
    this.userNameErrorMessage = false;
    for (let user of (this.deed as Deed).users) {
      console.log((user as User).username === this.userName.value.toString());
      if ((user as User).username === this.userName.value.toString()) {
        this.userNameErrorMessage = true;
        return;
      }
    }
    this.userNames.push(this.userName.value.toString());
    console.log(this.userNames);
    this.formControlList.forEach(form => form.disable());
    this.userName = new FormControl('', [Validators.required]);
    this.formControlList.push(this.userName);
  }

  deleteUsername(form: FormControl) {
    this.formControlList = this.formControlList.filter(existingForm => existingForm.value !== form.value);
    this.userNames = this.userNames.filter(existingUsername => existingUsername !== form.value);
  }

  registerTeam() {
    for (let username of this.userNames) {
      this.userService.getUserByUsername(username).toPromise().then(
        response => {
          this.user = response;
          this.deedService.addUserToDeed(this.user, this.deed.id).toPromise().then(
            res => {
              this.deedService.deactivateDeed(this.deed.id).toPromise().then(
                resp => {
                  console.log(resp);
                }, error => {
                  console.log(error.error.message);
                  return;
                }
              );
            },
            error => {
              console.log(error.error.message);
              return;
            }
          );
        },
        error => {
          console.log(error.error.message);
          return;
        }
      );
    }
    this.deed.isClosed = true;
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
