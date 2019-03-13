import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDeedRegistrationComponent } from './good-deed-registration.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';
import {DialogComponent} from '../dialog/dialog.component';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';
import {RegistrationComponent} from '../registration/registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('GoodDeedRegistrationComponent', () => {
  let component: GoodDeedRegistrationComponent;
  let fixture: ComponentFixture<GoodDeedRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule],
      declarations: [GoodDeedRegistrationComponent,
        DialogComponent,
        HomeComponent,
        LoginComponent,
        RegistrationComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodDeedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
