import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AccountService } from 'src/services/account/account.service';
import { BrowserStorageService } from 'src/services/share/browser-storage.service';

@Component({
  selector: 'app-auth-partial',
  templateUrl: './auth-partial.component.html',
  styleUrls: ['./auth-partial.component.css']
})
export class AuthPartialComponent implements OnInit {
  constructor(private browserStorageService: BrowserStorageService, private router: Router, private accountService: AccountService) { }
  isLoggedUser: boolean = false;
  panelRoot: string;
  ngOnInit(): void {
    this.isLoggedUser = this.accountService.isLogined();
  }

  logout() {
    this.browserStorageService.removeLocal("token");
    this.router.navigate(['/'])
    window.location.reload;
  }


  goToPanel() {
    debugger;
    // check Admin
    this.accountService.isAdmin().pipe(
      map(account => {
        console.log("admin check :" +account);
        if (account == true) {
          this.router.navigate(['/Admin/Dashboard']);
          return;
        }
      })
    );


    // check Customer
    let isCustomerRole: boolean = false;
    this.accountService.isCustomer().pipe(
      map(account => {
        console.log("customer check :" + account);
        isCustomerRole = account;
      })
    );

    if (isCustomerRole) {
      this.router.navigate(['/CustomerPanel/Profile']);
      return;
    }

  }

}
