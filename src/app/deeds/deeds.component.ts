import {Component, OnInit} from '@angular/core';
import {userError} from '@angular/compiler-cli/src/transformers/util';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-deeds',
  templateUrl: './deeds.component.html',
  styleUrls: ['./deeds.component.css']
})
export class DeedsComponent implements OnInit {
  mockList = [];

  constructor(private dialog: DialogComponent) {
  }

  ngOnInit() {
    this.mockList.push({
      name: 'ergg',
      category: {
        name: 'kids'
      },
      teamLeadId: 2,
      location: 'freerf',
      description: 'regejjjj',
      isClosed: false,
      contact: {
        name: 'labas',
        email: 'sdvksv@sv',
        phone: '+37067398566'
      },
      participation: 'team',
      users: [{
        id: 2,
        username: 'testusername',
        email: 'sfsdfdsfds',
        passwordHash: 'sadfsfdvfdvwvrvwevwv'
      },
        {
          id: 1,
          username: 'testusername',
          email: 'sfsdfdsfds',
          passwordHash: 'sadfsfdvfdvwvrvwevwv'
        }]
    });
    this.mockList.push({
      name: 't0000t',
      category: {
        name: 'kids'
      },
      teamLeadId: 2,
      location: 'freerf',
      description: 'rege',
      isClosed: true,
      contact: {
        name: 'labas',
        email: 'sdvksv@sv',
        phone: '+37067398566'
      },
      participation: 'solo',
      users: [{
        id: 2,
        username: 'testusername',
        email: 'sfsdfdsfds',
        passwordHash: 'sadfsfdvfdvwvrvwevwv'
      }]
    });
    this.mockList.push({
      name: 'trg11111rgt',
      category: {
        name: 'kids'
      },
      teamLeadId: null,
      location: 'freerf',
      description: 'rege',
      isClosed: false,
      contact: {
        name: 'labas',
        email: 'sdvksv@sv',
        phone: '+37067398566'
      },
      participation: 'solo',
      users: [{
        id: 2,
        username: 'testusername',
        email: 'sfsdfdsfds',
        passwordHash: 'sadfsfdvfdvwvrvwevwv'
      }]
    });
  }

  addNewDeed() {
  }

  sortUsersArray(deed) {
    let teamLead = deed.users.filter(user => user.id === deed.teamLeadId);
    deed.users = deed.users.filter(user => user.id !== deed.teamLeadId);
    deed.users.unshift(teamLead);
    return deed;
  }
  getAllDeeds() {
    //TODO: fetch deeds from db and run from sortUsersArra()
  }

  openTeamRegistration() {
    this.dialog.openTeamDialog();
  }
}
