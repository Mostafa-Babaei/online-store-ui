import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from 'src/Models/account/user';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { AccountService } from 'src/services/account/account.service';
import { BrowserStorageService } from 'src/services/share/browser-storage.service';

@Component({
  selector: 'app-auth-partial',
  templateUrl: './auth-partial.component.html',
  styleUrls: ['./auth-partial.component.css']
})
export class AuthPartialComponent implements OnInit {
  constructor(private browserStorageService: BrowserStorageService, private router: Router, public accountService: AccountService) { }

  isLoggedUser: boolean = false;
  panelRoot: string;

  adminRole: string = GlobalConstants.AdminRole;
  customerRole: string = GlobalConstants.CustomerRole;

  ngOnInit(): void {
    this.isLoggedUser = this.accountService.isLogined();
  }

  logout() {
    this.browserStorageService.removeLocal("token");
    this.router.navigate(['/'])
    window.location.reload;
  }

  user: User;
  goToPanel() {
    debugger;
    this.accountService.getUser().subscribe((response) => {
      if (response.isSuccess) {
        this.user = response.data as User;
        
        let role = this.user.role.filter(x => x.selected == true)[0];
        if (role && role.text == this.adminRole) {
          this.router.navigate(['/Admin/Dashboard']);
          return;
        }
        if (role && role.text == this.customerRole) {
          this.router.navigate(['/CustomerPanel/Profile']);
          return;
        }
        this.router.navigate(['/']);

      } else {
        this.router.navigate(['/']);
      }
    });
  }

}
