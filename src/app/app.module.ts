import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { ErrorCheckComponent } from './error-check/error-check.component';
import { GoodDeedRegistrationComponent } from './good-deed-registration/good-deed-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    ErrorDialogComponent,
    DialogComponent,
    ErrorCheckComponent,
    GoodDeedRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [DialogComponent, ErrorCheckComponent],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent, GoodDeedRegistrationComponent]
})
export class AppModule { }
