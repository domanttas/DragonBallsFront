import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Deed} from '../../models/deed';
import {UserService} from '../../services/user.service';
import {DeedService} from '../../services/deed.service';
import {User} from '../../models/user';
import {Participation} from '../../models/participation';
import {DeedRequest} from '../../models/deed-request';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.css']
})
export class TeamRegistrationComponent implements OnInit {

  userName: FormControl;
  formControlList: FormControl[];
  teamUsernames: any[];
  deed: any;
  user: any;
  users: User[];
  userNameErrorMessage: boolean;

  userRegistrationErrorMessage: string;
  isUserRegistrationErrorPresent: boolean;

  currentUserUsername: string;
  currentUserId: number;

  teamUsers: User[];

  deedRequest: DeedRequest;

  @ViewChild('error') prop: ElementRef;

  constructor(private dialogRef: MatDialogRef<TeamRegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private userService: UserService,
              private deedService: DeedService,
              private spinner: NgxSpinnerService) {
    this.deed = data.goodDeed;
  }

  ngOnInit() {
    this.userName = new FormControl('', [Validators.required]);
    this.teamUsernames = [];
    this.formControlList = [];
    this.users = [];
    this.teamUsers = [];
    this.formControlList.push(this.userName);
    this.currentUserUsername = this.userService.user.username;
    this.currentUserId = this.userService.user.id;
  }

  close() {
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
    this.teamUsernames.push(this.userName.value.toString());
    this.formControlList.forEach(form => form.disable());
    this.userName = new FormControl('', [Validators.required]);
    this.formControlList.push(this.userName);
  }

  deleteUsername(form: FormControl) {
    this.formControlList = this.formControlList.filter(existingForm => existingForm.value !== form.value);
    this.teamUsernames = this.teamUsernames.filter(existingUsername => existingUsername !== form.value);
  }

  registerTeam() {
    this.teamUsernames.push(this.currentUserUsername);
    this.teamUsernames = Array.from(new Set(this.teamUsernames));
    this.teamUsernames = this.teamUsernames.filter(existingUsername => existingUsername !== '');

    if (this.teamUsernames.length <= 1) {
      this.isUserRegistrationErrorPresent = true;
      this.userRegistrationErrorMessage = 'Please choose your team members';
      return;
    }

    this.deedRequest = {
      creatorId: this.deed.creatorId,
      name: this.deed.name,
      description: this.deed.description,
      location: this.deed.location,
      isClosed: true,
      teamLeadId: this.currentUserId,
      category: {
        id: null,
        name: this.deed.category.name
      },
      contact: {
        name: this.deed.contact.name,
        email: this.deed.contact.email,
        phone: this.deed.contact.phone
      },
      participation: Participation.PARTICIPATE_AS_TEAM.toString(),
      teamUsernames: this.teamUsernames
    };

    this.spinner.show();
    this.deedService.createDeed(this.deedRequest).subscribe(
      result => {
        this.spinner.hide();
        this.close();
      },
      error => {
        this.spinner.hide();
        this.setErrorMessage('Incorrect usernames: ' + this.parseErrorUsernames(error.error));
        this.prop.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', alignToTop: true});
      }
    );
  }

  setErrorMessage(errorMessage: string) {
    this.isUserRegistrationErrorPresent = true;
    this.userRegistrationErrorMessage = errorMessage;

  }

  parseErrorUsernames(usernames) {
    return usernames.join(', ');
  }
}
