import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authToken: any;

  constructor(private auth: AuthService,
              private router: Router,
              private user: UserService) {
  }

  // If 200 - we get new refreshed token and user is logged in routing to home page, if 400 - user needs to be redirected to log in page
  canActivate(): Observable<boolean> | boolean {
    // if (this.auth.getIsLoggedIn()) {
    //   return true;
    // }
    return this.user.isLoggedIn().pipe(map(res => {
      if (res.status) {
        console.log(res.token);
        this.auth.setLoggedIn(true);
        this.authToken = res.token;

        localStorage.removeItem('token');
        localStorage.setItem('token', this.authToken);

        console.log(this.authToken);
        return true;
      } else {
        return false;
      }
    }));

    /*    if (!this.auth.isLoggedIn) {
      // we might be logged in
      this.router.navigate(['login']);
    }
    return this.auth.isLoggedIn;*/
  }
}
