import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {deedTypes} from '../../models/constants';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-deed-model-display, [app-deed-model-display]',
  templateUrl: './deed-model-display.component.html',
  styleUrls: ['./deed-model-display.component.css']
})
export class DeedModelDisplayComponent implements OnInit {

  @Input() deed: any;
  @Input() username: string;

  deedTypes: any;

  @Output() registerSoloEvent = new EventEmitter();
  @Output() registerTeamEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.deedTypes = deedTypes;
  }

  registerSolo(deed) {
    this.registerSoloEvent.emit(deed);
  }

  openTeamRegistration(deed) {
    this.registerTeamEvent.emit(deed);
  }

  checkIfUserISRegisteredToDeed() {
    for (let user of this.deed.users) {
      if (user.username === this.username) {
        return true;
      }
    }
    return false;
  }
}
