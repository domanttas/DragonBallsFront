import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { GoodDeedRegistrationComponent } from './good-deed-registration/good-deed-registration.component';
import { DeedsComponent } from './deeds/deeds.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TeamRegistrationComponent } from './deeds-team-registration/team-registration.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    ErrorDialogComponent,
    DeedsComponent,
    TeamRegistrationComponent,
    GoodDeedRegistrationComponent,
    ConfirmationDialogComponent
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
    HttpClientModule,
    MatExpansionModule,
    MatListModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent, TeamRegistrationComponent, GoodDeedRegistrationComponent, ConfirmationDialogComponent]
})
export class AppModule { }
