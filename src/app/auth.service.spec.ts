import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule],
    declarations: [HomeComponent,
      LoginComponent,
      RegistrationComponent]}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
