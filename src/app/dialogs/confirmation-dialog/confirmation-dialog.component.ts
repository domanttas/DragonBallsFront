import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Deed} from '../../models/deed';
import {Participation} from '../../models/participation';
import {DeedService} from '../../services/deed.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  deed: Deed;
  user: User;

  constructor(private deedService: DeedService,
              private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.deed = data.goodDeed;
    this.user = data.registeredUser;
  }

  ngOnInit() {
  }

  async confirm() {
    await this.updateDeedParticipationType(this.deed);
    this.deedService.addUserToDeed(this.user, this.deed.id).toPromise().then(
      response => {
      },
      error => {
      }
    );
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

  async updateDeedParticipationType(deed: Deed) {
    let deedUpdate = (deed as Deed);
    deedUpdate.participation = Participation.PARTICIPATE_AS_SOLO.toString();

    await this.deedService.updateDeed(deedUpdate).toPromise().then(
      response => {

      },
      deedUpdateError => {

      }
    );
  }
}
