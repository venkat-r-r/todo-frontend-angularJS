import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthenticationService } from './http/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private h: BasicAuthenticationService,
    private router: Router
    )
  { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
     if (this.h.isUserLoggedIn()) { return true; }
     this.router.navigate(['/']);
     return false;
  }
}
