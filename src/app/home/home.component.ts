import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { LayoutComponent } from '../layout/layout.component';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('statistics') MyProp: ElementRef;
  constructor(private user: UserService, private layout: LayoutComponent, private dialog: DialogComponent) { }

  ngOnInit() {
    this.layout.ngOnInit();
  }

  scrollToStatistics() {
    this.MyProp.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', alignToTop: true});
  }

  registerGoodDeed() {
    this.dialog.openDeedRegistrationDialog();
  }
}
