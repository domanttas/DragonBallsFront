import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { GoodDeedRegistrationComponent } from './dialogs/good-deed-registration/good-deed-registration.component';
import { DeedsComponent } from './pages/deeds/deeds.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TeamRegistrationComponent } from './dialogs/deeds-team-registration/team-registration.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { DeedModelDisplayComponent } from './pages/deed-model-display/deed-model-display.component';
import { BlogRegistrationComponent } from './dialogs/blog-registration/blog-registration.component';
import {BlogComponent} from './pages/blog/blog.component';

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
    ConfirmationDialogComponent,
    DeedModelDisplayComponent,
    BlogRegistrationComponent,
    BlogComponent
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
  entryComponents: [ErrorDialogComponent, TeamRegistrationComponent, GoodDeedRegistrationComponent, ConfirmationDialogComponent, BlogRegistrationComponent]
})
export class AppModule { }
