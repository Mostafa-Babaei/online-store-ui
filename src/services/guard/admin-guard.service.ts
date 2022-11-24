import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../account/account.service';

type NewType = Observable<boolean | UrlTree>;

@Injectable({
  providedIn: 'root'
})

export class AdminGuardService {

  constructor(private accountService: AccountService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | NewType | Promise<boolean | UrlTree> {
    let chack: Boolean = false;
    this.accountService.isAdmin().subscribe((response) => {
      chack = response as boolean;
    });

    if (chack) {
      return true;
    } else {
      this.router.navigate(['/AccessDenied']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    let result: Boolean = false;

    this.accountService.isAdmin().subscribe((response) => {
      result = response as boolean;
    });

    if (result == true) {
      return true;
    } else {
      this.router.navigate(['/AccessDenied']);
      return false;
    }
  }

}
