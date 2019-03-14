import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.css']
})
export class TeamRegistrationComponent implements OnInit {

  userName: FormControl;
  formControlList: FormControl[];
  userNames: string[];

  constructor(private dialogRef: MatDialogRef<TeamRegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
    this.userName = new FormControl('', [Validators.required]);
    this.userNames = [];
    this.formControlList = [];
    this.formControlList.push(this.userName);
    console.log('fuck');
  }

  cancel() {
    this.dialogRef.close();
  }

  addNewUsername() {
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

}
