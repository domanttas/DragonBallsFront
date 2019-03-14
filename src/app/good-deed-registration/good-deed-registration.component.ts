import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DeedRequest} from '../models/deed-request';
import {DeedService} from '../deed.service';
import {UserService} from '../user.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {DialogComponent} from '../dialog/dialog.component';
import {ErrorCheckComponent} from '../error-check/error-check.component';

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
    Validators.pattern('[1-9]{8}')]);
  selectedCategory = new FormControl('');
  selectedParticipationType = new FormControl('');
  addedUser = new FormControl('');
  deed: DeedRequest;
  username: string;
  isCaptain: boolean;
  teamLeadId: number;

  categories: CategoryChoice[] = [
    {value: 'Help for animals', viewValue: 'Help for animals'},
    {value: 'Help for elderly', viewValue: 'Help for elderly'},
    {value: 'Help for kids', viewValue: 'Help for kids'},
    {value: 'Help for environment', viewValue: 'Help for environment'},
    {value: 'Other', viewValue: 'Other'}
  ];
  participationChoices: ParticipationType[] = [
    {value: 'Not interested', viewValue: 'Not interested'},
    {value: 'Participate as solo', viewValue: 'Participate as solo'},
    {value: 'Participate as team', viewValue: 'Participate as team'}
  ];

  public myForm: FormGroup;

  constructor(private deedService: DeedService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private dialog: DialogComponent,
              private errorCheck: ErrorCheckComponent,
              private dialogRef: MatDialogRef<GoodDeedRegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) data) {

    this.myForm = formBuilder.group({
      user1: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addControl() {
    this.myForm.addControl(this.addedUser.value, new FormControl('', Validators.required));
    console.log(this.myForm.getRawValue());
  }

  removeControl(control) {
    this.myForm.removeControl(control.key);
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
      console.log(this.name.value, this.description.value, this.selectedCategory.value, this.location.value, this.contactName.value,
        this.contactEmail.value, this.contactTelephoneNo.value, this.selectedParticipationType.value);
      this.deed = {
        id: null,
        name: this.name.value,
        description: this.description.value,
        location: this.location.value,
        isClosed: true,
        teamLeadId: null,
        category: {
          id: null,
          name: this.selectedCategory.value
        },
        contact: {
          id: null,
          name: this.contactName.value,
          email: this.contactEmail.value,
          phoneNo: this.contactTelephoneNo.value
        },
        participation: this.selectedParticipationType.value,
        teamUsernames: this.getUsernamesFromDeed()
      };
      this.deedService.createDeed(this.deed).subscribe(
        response => {
          console.log(response);
          this.close();
          this.dialog.openDialog('Registration successful!');
        },
        error => {
          this.dialog.openDialog(this.errorCheck.checkForError(error.error.message));
          console.log(error.error.message);
        });

    } else {
      return;
    }
  }

  getUserByToken() {
    this.userService.getUserByToken().toPromise().then(
      result => {
        if (result) {
          this.username = result.username;
        }
      }
    );
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
    if (this.selectedParticipationType.value === 'Not interested') {
      return [];
    } else if (this.selectedParticipationType.value === 'Participate as solo') {
      let tempUsername = [];
      tempUsername.push(this.getUserByToken());
      return tempUsername;
    } else if (this.selectedParticipationType.value === 'Participate as team') {
      let tempUsernames = [];
      tempUsernames.push(this.getUserByToken());
      // TODO: fetch usernames from modal
      return tempUsernames;
    }
  }

  /* Another way to get value from dropdown
    selectCategory(event) {
      const target = event.source.selected._element.nativeElement;
      this.selectedCategory = target.innerText.trim();
      // console.log(this.selectedCategory);
      // if I will need whole object
      /!*    const selectedData = {
        value: event.value,
        text: target.innerText.trim()
      };*!/
    }*/

  close() {
    this.dialogRef.close();
  }
}
