import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authToken: any;

  constructor(private auth: AuthService,
              private router: Router,
              private user: UserService) {
  }

  isUserTokenValid(): Promise<boolean> {
    return this.user.isLoggedIn().toPromise().then(
      res => {
        this.authToken = res.token;

        localStorage.removeItem('token');
        localStorage.setItem('token', this.authToken);

        console.log(this.authToken);
        return true;
      },
      error => {
        console.log(error.error.message);
        return false;
      }
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.user.isLoggedIn().toPromise().then(
      res => {
        this.router.navigate(['home']);
        return false;
      },
      error => {
        return true;
      }
    );
  }
}
