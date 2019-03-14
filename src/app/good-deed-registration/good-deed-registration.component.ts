import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {DeedRequest} from '../models/deed-request';
import {DeedService} from '../deed.service';
import {UserService} from '../user.service';
import {Participation} from '../models/participation';
import {computeStyle} from '@angular/animations/browser/src/util';
import {User} from '../models/user';

export interface CategoryChoice {
  value: string;
  viewValue: string;
}

export interface ParticipationType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-good-deed-registration',
  templateUrl: './good-deed-registration.component.html',
  styleUrls: ['./good-deed-registration.component.css']
})
export class GoodDeedRegistrationComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.maxLength(200)]);
  description = new FormControl('', [Validators.required, Validators.maxLength(2000)]);
  location = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  contactName = new FormControl('', [Validators.required, Validators.maxLength(25)]);
  contactEmail = new FormControl('', [Validators.required, Validators.email]);
  contactTelephoneNo = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8),
    Validators.pattern('[0-9]{8}')]);
  selectedCategory = new FormControl('');
  selectedParticipationType = new FormControl('');

  deed: DeedRequest;

  username: string;

  isCaptain: boolean;

  teamLeadId: number;

  usernameFormControl: FormControl;
  usernameFormControlList: FormControl[];
  usernamesFormControl: string[];

  categories: CategoryChoice[] = [
    {value: 'Help for animals', viewValue: 'Help for animals'},
    {value: 'Help for elderly', viewValue: 'Help for elderly'},
    {value: 'Help for kids', viewValue: 'Help for kids'},
    {value: 'Help for environment', viewValue: 'Help for environment'},
    {value: 'Other', viewValue: 'Other'}
  ];
  participationChoices: ParticipationType[] = [
    {value: '0', viewValue: 'Not interested'},
    {value: '1', viewValue: 'Participate as solo'},
    {value: '2', viewValue: 'Participate as team'}
  ];

  constructor(private deedService: DeedService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<GoodDeedRegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
    this.usernameFormControl = new FormControl('', Validators.required);
    this.usernamesFormControl = [];
    this.usernameFormControlList = [];
    this.usernameFormControlList.push(this.usernameFormControl);
    this.getUserByToken();
  }

  addNewUsername() {
    this.usernamesFormControl.push(this.usernameFormControl.value.toString());
    this.usernameFormControlList.forEach(form => form.disable());
    this.usernameFormControl = new FormControl('', [Validators.required]);
    this.usernameFormControlList.push(this.usernameFormControl);
  }

  deleteNewUsername(form: FormControl) {
    this.usernameFormControlList = this.usernameFormControlList.filter(existingForm => existingForm.value !== form.value);
    this.usernamesFormControl = this.usernamesFormControl.filter(existingUsername => existingUsername !== form.value);
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' :
      this.name.hasError('maxlength') ? 'Maximum of 200 characters are allowed' :
        '';
  }

  getDescriptionErrorMessage() {
    return this.description.hasError('required') ? 'You must enter a value' :
      this.description.hasError('maxlength') ? 'Maximum of 2000 characters are allowed' :
        '';
  }

  getLocationErrorMessage() {
    return this.location.hasError('required') ? 'You must enter a value' :
      this.location.hasError('maxlength') ? 'Maximum of 50 characters are allowed' :
        '';
  }

  getDropdownErrorMessage() {
    return this.selectedCategory.hasError('required') ? 'You must pick one of the given choices' : '';
  }

  getContactEmailErrorMessage() {
    return this.contactEmail.hasError('required') ? 'You must enter a value' :
      this.contactEmail.hasError('email') ? 'Not a valid email' :
        '';
  }

  getContactNameErrorMessage() {
    return this.contactName.hasError('required') ? 'You must enter a value' :
      this.contactName.hasError('maxlength') ? 'Maximum of 50 characters are allowed' :
        '';
  }

  getContactTelephoneNoErrorMessage() {
    return this.contactTelephoneNo.hasError('required') ? 'You must enter a value' :
      this.contactTelephoneNo.hasError('minlength') ? 'You must enter exactly 8 digits' :
        this.contactTelephoneNo.hasError('maxlength') ? 'You must enter exactly 8 digits' :
          this.contactTelephoneNo.hasError('pattern') ? 'All characters must be digits' :
            '';
  }

  save() {
    if (this.selectedCategory.valid && this.selectedParticipationType.valid && this.name.valid && this.description.valid
      && this.location.valid && this.contactName.valid && this.contactEmail.valid && this.contactTelephoneNo.valid) {

      this.deed = {
        name: this.name.value,
        description: this.description.value,
        location: this.location.value,
        isClosed: null,
        teamLeadId: this.teamLeadId,
        category: {
          id: null,
          name: this.selectedCategory.value
        },
        contact: {
          name: this.contactName.value,
          email: this.contactEmail.value,
          phone: '+370' + this.contactTelephoneNo.value
        },
        participation: this.parseSelectedParticipation(this.selectedParticipationType.value),
        teamUsernames: this.getUsernamesFromDeed()
      };

      if (this.isCaptain) {
        this.deed.teamLeadId = this.teamLeadId;
      }

      console.log(this.deed);

      this.deedService.createDeed(this.deed).subscribe(
        response => {
          console.log(response);
          this.close();
        },
        error => {
          console.log(error.error.message);
        });

    } else {
      return;
    }
  }

  getUserByToken() {
    this.userService.getUserByToken().toPromise()
      .then( result => {
        if (result) {
          this.username = result.username;
          this.teamLeadId = result.id;
        } else {
          console.log(result);
        }
      });
  }

  assignCaptainToggle(event) {
    if (!this.isCaptain) {
      this.isCaptain = true;
      console.log(this.isCaptain);
    } else {
      this.isCaptain = false;
      console.log(this.isCaptain);
    }

  }

  getUsernamesFromDeed(): any {
    if (this.parseSelectedParticipation(this.selectedParticipationType.value) === Participation.NOT_INTERESTED.toString()) {
      return [];
    } else if (this.parseSelectedParticipation(this.selectedParticipationType.value) === Participation.PARTICIPATE_AS_SOLO.toString()) {
      let tempUsername = [];
      this.getUserByToken();
      tempUsername.push(this.username);
      console.log(tempUsername);
      return tempUsername;
    } else if (this.parseSelectedParticipation(this.selectedParticipationType.value) === Participation.PARTICIPATE_AS_TEAM.toString()) {
      let tempUsernames = [];

      this.getUserByToken();

      tempUsernames = this.usernamesFormControl;
      console.log(tempUsernames);
      tempUsernames.push(this.username);
      console.log(tempUsernames);

      return tempUsernames;
    }
  }

  close() {
    this.dialogRef.close();
  }

  parseSelectedParticipation(participation: string): string {
    console.log(participation);
    console.log(Participation.PARTICIPATE_AS_SOLO.toString());
    if (participation === Participation.NOT_INTERESTED.toString()) {
      return Participation.NOT_INTERESTED.toString();
    } else if (participation === Participation.PARTICIPATE_AS_SOLO.toString()) {
      return Participation.PARTICIPATE_AS_SOLO.toString();
    } else if (participation === Participation.PARTICIPATE_AS_TEAM.toString()) {
      return Participation.PARTICIPATE_AS_TEAM.toString();
    }
  }
}
