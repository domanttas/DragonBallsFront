import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {RegistrationComponent} from './registration/registration.component';
import {AuthGuard} from './auth.guard';
import {DeedsComponent} from './deeds/deeds.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'deeds', component: DeedsComponent},
  {path: 'registration', component: RegistrationComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
