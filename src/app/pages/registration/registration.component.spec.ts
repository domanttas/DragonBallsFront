import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from '../login/login.component';
import {DialogComponent} from '../dialog/dialog.component';
import {HomeComponent} from '../home/home.component';
import {NavbarComponent} from '../../navbar/navbar.component';
import {ErrorCheckComponent} from '../error-check/error-check.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule],
      declarations: [RegistrationComponent,
        DialogComponent,
        HomeComponent,
        LoginComponent,
        RegistrationComponent],
      providers: [NavbarComponent,
        DialogComponent,
        ErrorCheckComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getPasswordErrorMessage', () => {
    it('should get password required error message', () => {
      expect(component.getPasswordErrorMessage()).toBe('You must enter a value');
    });

    it('should get password min 7 characters error message', () => {
      component.password.setValue('aaa');
      expect(component.getPasswordErrorMessage()).toBe('Min 7 characters');
    });

    it('should get password max 12 characters error message', () => {
      component.password.setValue('12345678910111213');
      expect(component.getPasswordErrorMessage()).toBe('Max 12 characters');
    });
  });
});
