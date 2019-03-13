import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {DialogComponent} from './dialog/dialog.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {LayoutComponent} from './layout/layout.component';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
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
      RegistrationComponent]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
