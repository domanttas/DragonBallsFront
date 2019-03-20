import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {DeedRequest} from '../../models/deed-request';
import {DeedService} from '../../services/deed.service';
import {UserService} from '../../services/user.service';
import {Participation} from '../../models/participation';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {Deed} from '../../models/deed';

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

  name = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  description = new FormControl('', [Validators.required, Validators.maxLength(1000)]);
  location = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  contactName = new FormControl('', [Validators.required, Validators.maxLength(40)]);
  contactEmail = new FormControl('', [Validators.required, Validators.email]);
  contactTelephoneNo = new FormControl('', [Validators.required, Validators.pattern('^(\\+370|8){1}[0-9]{8}$')]);

  selectedCategory = new FormControl('');
  selectedParticipationType = new FormControl('');

  deed: DeedRequest;

  deedUpdate: Deed;
  editMode: boolean;

  username: string;

  isCaptain: boolean;
  teamLeadId: number;

  usernameFormControl: FormControl;
  usernameFormControlList: FormControl[];
  usernamesFormControl: string[];

  isErrorPresent: boolean;
  errorMessage: string;

  phoneNoCode = '+370';

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


  @ViewChild('error') MyProp: ElementRef;

  constructor(private deedService: DeedService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              private spinner: NgxSpinnerService,
              private dialogRef: MatDialogRef<GoodDeedRegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.deedUpdate = data.goodDeed;
    this.editMode = data.editMode;
  }

  ngOnInit() {
/*    this.deedUpdate = {
      creatorId: 2,
      name: 'dads',
      description: 'dads',
      category: {name: 'Help for animals'},
      location: 'sdad',
      isClosed: null,
      contact: {name: 'dasd', email: 'das', phone: 'sada'},
      participation: null,
      users: []
    };*/
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
      this.name.hasError('maxlength') ? 'Maximum of 50 characters are allowed' :
        '';
  }

  getDescriptionErrorMessage() {
    return this.description.hasError('required') ? 'You must enter a value' :
      this.description.hasError('maxlength') ? 'Maximum of 1000 characters are allowed' :
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
      this.contactName.hasError('maxlength') ? 'Maximum of 40 characters are allowed' :
        '';
  }

  getContactTelephoneNoErrorMessage() {
    return this.contactTelephoneNo.hasError('required') ? 'You must enter a value' :
      this.contactTelephoneNo.hasError('pattern') ? 'Invalid phone number' :
        '';
  }

  save() {
    if (this.selectedCategory.valid && this.selectedParticipationType.valid && this.name.valid && this.description.valid
      && this.location.valid && this.contactName.valid && this.contactEmail.valid && this.contactTelephoneNo.valid) {

      this.deed = {
        creatorId: this.teamLeadId,
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
          phone: this.contactTelephoneNo.value
        },
        participation: this.parseSelectedParticipation(this.selectedParticipationType.value),
        teamUsernames: this.getUsernamesFromDeed()
      };

      if (this.isCaptain) {
        this.deed.teamLeadId = this.teamLeadId;
      } else {
        this.deed.teamLeadId = null;
      }

      this.spinner.show();

      console.log(this.deed);
      this.deedService.createDeed(this.deed).subscribe(
        response => {
          this.isCaptain = false;
          this.teamLeadId = null;
          this.spinner.hide();
          this.close();
        },
        error => {
          if (Participation.PARTICIPATE_AS_TEAM.toString() === this.parseSelectedParticipation(this.deed.participation)) {
            this.setErrorMessage('Incorrect usernames: ' + this.parseErrorUsernames(error.error));
            this.MyProp.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', alignToTop: true});
            this.spinner.hide();
          } else {
            this.setErrorMessage(error.error.message);
            this.spinner.hide();
          }
        });
    } else {
      return;
    }
  }

  getUserByToken() {
    this.userService.getUserByToken().toPromise()
      .then(result => {
        if (result) {
          this.username = result.username;
          this.teamLeadId = result.id;
        }
      });
  }

  setIsCaptainFalse() {
    this.isCaptain = false;
  }

  assignCaptainToggle() {
    if (!this.isCaptain) {
      this.isCaptain = true;
    } else {
      this.isCaptain = false;
    }
  }

  getUsernamesFromDeed(): any {
    if (this.parseSelectedParticipation(this.selectedParticipationType.value) === Participation.NOT_INTERESTED.toString()) {
      this.isCaptain = false;
      return [];
    } else if (this.parseSelectedParticipation(this.selectedParticipationType.value) === Participation.PARTICIPATE_AS_SOLO.toString()) {
      let tempUsername = [];
      this.getUserByToken();
      tempUsername.push(this.username);
      return tempUsername;
    } else if (this.parseSelectedParticipation(this.selectedParticipationType.value) === Participation.PARTICIPATE_AS_TEAM.toString()) {
      let tempUsernames = [];

      this.isCaptain = true;

      this.getUserByToken();

      tempUsernames = this.usernamesFormControl;
      tempUsernames.push(this.username);

      return Array.from(new Set(tempUsernames));
    }
  }

  close() {
    this.dialogRef.close();
  }

  parseSelectedParticipation(participation: string): string {
    if (participation === Participation.NOT_INTERESTED.toString()) {
      return Participation.NOT_INTERESTED.toString();
    } else if (participation === Participation.PARTICIPATE_AS_SOLO.toString()) {
      return Participation.PARTICIPATE_AS_SOLO.toString();
    } else if (participation === Participation.PARTICIPATE_AS_TEAM.toString()) {
      return Participation.PARTICIPATE_AS_TEAM.toString();
    }
  }

  setErrorMessage(errorMessage: string) {
    this.isErrorPresent = true;
    this.errorMessage = errorMessage;

  }

  parseErrorUsernames(usernames) {
    return usernames.join(', ');
  }

  edit() {
    if (this.selectedCategory.valid && this.name.valid && this.description.valid && this.location.valid &&
      this.contactName.valid && this.contactEmail.valid && this.contactTelephoneNo.valid) {

      this.deedUpdate = {
        id: this.deedUpdate.id,
        creatorId: this.deedUpdate.creatorId,
        name: this.name.value,
        description: this.description.value,
        location: this.location.value,
        isClosed: this.deedUpdate.isClosed,
        teamLeadId: this.deedUpdate.teamLeadId,
        category: {
          id: this.deedUpdate.category.id,
          name: this.selectedCategory.value
        },
        contact: {
          name: this.contactName.value,
          email: this.contactEmail.value,
          phone: this.contactTelephoneNo.value
        },
        participation: this.deedUpdate.participation,
        users: this.deedUpdate.users
      };

      this.deedService.updateDeed(this.deedUpdate).toPromise().then(
        response => {
            this.editMode = false;
            this.close();
        },
        deedUpdateError => {

        }
      );
    } else {
      return;
    }
  }
}
