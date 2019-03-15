import {Component, OnInit} from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {AuthService} from '../auth.service';
import {DeedService} from '../deed.service';
import {Deed} from '../models/deed';
import {UserService} from '../user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-deeds',
  templateUrl: './deeds.component.html',
  styleUrls: ['./deeds.component.css']
})
export class DeedsComponent implements OnInit {
  mockList = [];
  isLoggedIn: boolean;
  deeds: any;
  user: any;

  constructor(private dialog: DialogComponent,
              private authService: AuthService,
              private deedService: DeedService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.isUserLoggedIn();
    this.getAllDeeds();
    // this.mockList.push({
    //   name: 'ergg',
    //   category: {
    //     name: 'kids'
    //   },
    //   teamLeadId: 2,
    //   location: 'freerf',
    //   description: 'regejjjj',
    //   isClosed: false,
    //   contact: {
    //     name: 'labas',
    //     email: 'sdvksv@sv',
    //     phone: '+37067398566'
    //   },
    //   participation: 'team',
    //   users: [{
    //     id: 2,
    //     username: 'testusername',
    //     email: 'sfsdfdsfds',
    //     passwordHash: 'sadfsfdvfdvwvrvwevwv'
    //   },
    //     {
    //       id: 1,
    //       username: 'testusername',
    //       email: 'sfsdfdsfds',
    //       passwordHash: 'sadfsfdvfdvwvrvwevwv'
    //     }]
    // });
    // this.mockList.push({
    //   name: 't0000t',
    //   category: {
    //     name: 'kids'
    //   },
    //   teamLeadId: 2,
    //   location: 'freerf',
    //   description: 'rege',
    //   isClosed: true,
    //   contact: {
    //     name: 'labas',
    //     email: 'sdvksv@sv',
    //     phone: '+37067398566'
    //   },
    //   participation: 'solo',
    //   users: [{
    //     id: 2,
    //     username: 'testusername',
    //     email: 'sfsdfdsfds',
    //     passwordHash: 'sadfsfdvfdvwvrvwevwv'
    //   }]
    // });
    // this.mockList.push({
    //   name: 'trg11111rgt',
    //   category: {
    //     name: 'kids'
    //   },
    //   teamLeadId: null,
    //   location: 'freerf',
    //   description: 'rege',
    //   isClosed: false,
    //   contact: {
    //     name: 'labas',
    //     email: 'sdvksv@sv',
    //     phone: '+37067398566'
    //   },
    //   participation: 'solo',
    //   users: [{
    //     id: 2,
    //     username: 'testusername',
    //     email: 'sfsdfdsfds',
    //     passwordHash: 'sadfsfdvfdvwvrvwevwv'
    //   }]
    // });
  }

  sortUsersArray(deed) {
    let teamLead = deed.users.filter(user => user.id === deed.teamLeadId);
    deed.users = deed.users.filter(user => user.id !== deed.teamLeadId);
    deed.users.unshift(teamLead);
    return deed;
  }

  getAllDeeds() {
    this.deedService.getAllDeeds().subscribe(
      response => {
        console.log(response);
        this.deeds = response;
        // this.deeds = this.deeds.forEach(deed => deed = this.sortUsersArray(deed));
        // for (let deed of this.deeds) {
        //   deed = this.sortUsersArray(deed);
        // }
        console.log(this.deeds);
      },
      error => {
        // TODO: display error
      }
    );
  }

  isDeedClosed(deed: any) {
    if (deed.closed) {
      return true;
    }
    return false;
  }

  openTeamRegistration(deed: Deed) {
    if (this.isLoggedIn) {
      this.dialog.openTeamDialog(deed);
    } else {
      this.dialog.openDialog('Please log in!');
    }
  }

  addNewDeed() {
    if (this.isLoggedIn) {
      this.dialog.openDeedRegistrationDialog();
    } else {
      this.dialog.openDialog('Please log in!');
    }
  }

  isUserLoggedIn(): any {
    this.authService.isUserTokenValid()
      .then(result => {
        if (result) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
  }

  registerSolo(deed: Deed) {
    if (this.isLoggedIn) {
      this.userService.getUserByToken().toPromise().then(
        res => {
          if (res) {
            this.user = res;
            for (let user of deed.users) {
              console.log(user);
              if (this.user.username === (user as User).username) {
                console.log(this.user.username);
                this.dialog.openDialog('You are already registered to this deed');
                return;
              }
            }
            this.deedService.addUserToDeed(this.user, deed.id).toPromise().then(
              response => {
                if (response) {
                  console.log(response);
                }
              },
              error => {
                console.log(error.error.message);
              }
            );
          }
        },
        error => {
          console.log(error.error.message);
        }
      );
    } else {
      this.dialog.openDialog('Please log in!');
    }
  }
}
