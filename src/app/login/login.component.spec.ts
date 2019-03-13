import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from '../home/home.component';
import {DialogComponent} from '../dialog/dialog.component';
import {RegistrationComponent} from '../registration/registration.component';
import {LayoutComponent} from '../layout/layout.component';
import {ErrorCheckComponent} from '../error-check/error-check.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule],
      declarations: [LoginComponent,
        DialogComponent,
        HomeComponent,
        LoginComponent,
        RegistrationComponent],
      providers: [LayoutComponent,
        DialogComponent,
      ErrorCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
