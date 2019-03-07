import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = 'Bla bla'

  @ViewChild('statistics') MyProp: ElementRef;
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getConfirmationData().subscribe(data => {
      this.message = data.message;
    });
  }

  scrollToStatistics() {
    this.MyProp.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', alignToTop: true});
  }

}
