import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../account/account.service';

type NewType = Observable<boolean | UrlTree>;

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {
  constructor(private accountService: AccountService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | NewType | Promise<boolean | UrlTree> {
    let loggined: boolean = this.accountService.isLogined();
    if (loggined == false) {
      this.router.navigate(['/login']);
    }
    return loggined;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let loggined = this.accountService.isLogined();
    if (!loggined) {
      this.router.navigate(['/login']);
    }
    return loggined;
  }

}
