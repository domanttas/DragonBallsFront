import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GoodDeedRegistrationComponent} from '../../dialogs/good-deed-registration/good-deed-registration.component';
import {DialogComponent} from '../dialog/dialog.component';
import {LoginComponent} from '../login/login.component';
import {RegistrationComponent} from '../registration/registration.component';
import {NavbarComponent} from '../../navbar/navbar.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule],
      declarations: [HomeComponent,
        DialogComponent,
        HomeComponent,
        LoginComponent,
        RegistrationComponent],
      providers: [NavbarComponent,
      DialogComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
