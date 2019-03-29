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
    await this.deedService.addUserToDeed(this.user, this.deed.id).then(
       async response => {
         (this.deed as any) = response;
         this.deed.teamLeadId = this.user.id;
         await this.updateDeedParticipationType();
         this.dialogRef.close();
      },
      error => {
      }
    );
  }

  async close() {
    await this.deedService.addUserToDeed(this.user, this.deed.id).then(
      async response => {
        (this.deed as any) = response;
        await this.updateDeedParticipationType();
        this.dialogRef.close();
      },
      error => {
      }
    );
  }

  async updateDeedParticipationType() {
    this.deed.participation = Participation.PARTICIPATE_AS_SOLO.toString();

    await this.deedService.updateDeed(this.deed).toPromise().then(
      response => {

      },
      deedUpdateError => {

      }
    );
  }
}
