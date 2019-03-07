import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('statistics') MyProp: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  scrollToStatistics() {
    this.MyProp.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', alignToTop: true});
  }

}
