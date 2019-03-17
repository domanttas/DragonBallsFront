import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Deed} from '../models/deed';
import {UserService} from '../user.service';
import {DeedService} from '../deed.service';
import {User} from '../models/user';

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

  userRegistrationErrorMessage: string;
  isUserRegistrationErrorPresent: boolean;

  currentUserUsername: string;
  currentUserId: number;

  teamUsers: User[];

  @ViewChild('error') prop: ElementRef;

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
    this.teamUsers = [];
    this.formControlList.push(this.userName);

    this.getUserByToken();
  }

  cancel() {
    this.dialogRef.close();
  }

  addNewUsername() {
    this.userNameErrorMessage = false;
    for (let user of (this.deed as Deed).users) {
      if ((user as User).username === this.userName.value.toString()) {
        this.userNameErrorMessage = true;
        return;
      }
    }
    this.userNames.push(this.userName.value.toString());
    this.formControlList.forEach(form => form.disable());
    this.userName = new FormControl('', [Validators.required]);
    this.formControlList.push(this.userName);
  }

  deleteUsername(form: FormControl) {
    this.formControlList = this.formControlList.filter(existingForm => existingForm.value !== form.value);
    this.userNames = this.userNames.filter(existingUsername => existingUsername !== form.value);
  }

  async registerTeam() {
    this.isUserRegistrationErrorPresent = false;

    this.userNames.push(this.currentUserUsername);
    this.userNames = Array.from(new Set(this.userNames));
    console.log(this.userNames);

    for (let username of this.userNames) {
      await this.getUserByUsername(username);

      console.log(this.isUserRegistrationErrorPresent);
      if (this.isUserRegistrationErrorPresent) {
        break;
      }
      console.log('nesamone');

      await this.addUserToDeed(this.user, this.deed.id);

      if (this.isUserRegistrationErrorPresent) {
        break;
      }

      await this.deactivateDeed(this.deed.id);
    }

    if (!this.isUserRegistrationErrorPresent) {
      await this.updateDeed();
      this.close();
    }
  }

  close() {
    this.dialogRef.close();
  }

  getUserByToken() {
    this.userService.getUserByToken().toPromise()
      .then(result => {
        if (result) {
          this.currentUserUsername = result.username;
          this.currentUserId = result.id;
        }
      });
  }

  async getUserByUsername(username) {
    await this.userService.getUserByUsername(username).toPromise().then(
      response => {
        this.user = response;
        this.teamUsers.push(this.user);
        console.log(response);
        console.log('sdfdsfdds');
      },
      userError => {
        this.userRegistrationErrorMessage = username + ' - ' + userError.error.message;
        this.isUserRegistrationErrorPresent = true;
        this.prop.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', alignToTop: true});
      }
    );
  }

  async addUserToDeed(user, id) {
    await this.deedService.addUserToDeed(user, id).toPromise().then(
      response => {

      },
      deedError => {
        this.userRegistrationErrorMessage = deedError.error.message;
        this.isUserRegistrationErrorPresent = true;
        this.prop.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', alignToTop: true});
      }
    );
  }

  async deactivateDeed(id) {
    await this.deedService.deactivateDeed(id).toPromise().then(
      response => {

      },
      deactivateError => {

      }
    );
  }

  async updateDeed() {
    let deed = (this.deed as Deed);
    deed.teamLeadId = this.currentUserId;

    for (let user of this.teamUsers) {
      (deed.users as User[]).push(user);
    }

    await this.deedService.updateDeed(this.deed).toPromise().then(
      response => {

      },
      deedUpdateError => {

      }
    );
  }
}
