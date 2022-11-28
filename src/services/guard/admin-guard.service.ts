import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AccountService } from '../account/account.service';

type NewType = Observable<boolean | UrlTree>;

@Injectable({
  providedIn: 'root'
})

export class AdminGuardService {

  constructor(private accountService: AccountService, private router: Router) { }

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.accountService.isAdmin().pipe(
      map(account => {
        if (!account) {
          this.router.navigate(['AccessDenied']);
          return false;
        }
        return true;
      })
    );
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.accountService.isAdmin().pipe(
      map(account => {
        if (!account) {
          this.router.navigate(['AccessDenied']);
          return false;
        }
        return true;
      })
    );
  }

}
