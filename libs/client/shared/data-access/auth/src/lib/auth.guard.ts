import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthState } from './state/auth.state';
import { Select } from '@ngxs/store';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  @Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<boolean>;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return lastValueFrom(this.isAuthenticated$).then((val) => {
      if (val === false) this.router.navigate(['auth', 'login']);

      return val;
    });
  }
}
