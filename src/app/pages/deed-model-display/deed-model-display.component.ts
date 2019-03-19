import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {deedTypes} from '../../models/constants';

@Component({
  selector: 'app-deed-model-display, [app-deed-model-display]',
  templateUrl: './deed-model-display.component.html',
  styleUrls: ['./deed-model-display.component.css']
})
export class DeedModelDisplayComponent implements OnInit {

  @Input() deed: any;

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
}
