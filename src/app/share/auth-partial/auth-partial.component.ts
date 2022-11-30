import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private browserStorageService: BrowserStorageService, private toastr: ToastrService,
    private router: Router, public accountService: AccountService) { }

  isLoggedUser: boolean = false;
  isCustomer: boolean = false;
  isAdmin: boolean = false;
  panelRoot: string;

  adminRole: string = GlobalConstants.AdminRole;
  customerRole: string = GlobalConstants.CustomerRole;

  ngOnInit(): void {
    this.isLoggedUser = this.accountService.isLogined();
    this.checkUser();
  }

  // logout() {
  //   this.browserStorageService.removeLocal("token");
  //   this.router.navigate(['/'])
  //   window.location.reload;
  // }
  logout() {
    this.accountService.logout().subscribe((response) => {
      if (response.isSuccess) {
        this.router.navigate(['/']);
        this.browserStorageService.removeLocal("token");
        window.location.reload();
        return;
      } else {
        this.toastr.error(response.message);
      }
    });
  }

  user: User;
  // goToPanel() {
  //   debugger;
  //   this.accountService.getUser().subscribe((response) => {
  //     if (response.isSuccess) {
  //       this.user = response.data as User;

  //       let role = this.user.role.filter(x => x.selected == true)[0];
  //       if (role && role.text == this.adminRole) {
  //         this.router.navigate(['/Admin/Dashboard']);
  //         return;
  //       }
  //       if (role && role.text == this.customerRole) {
  //         this.router.navigate(['/CustomerPanel/Profile']);
  //         return;
  //       }
  //       this.router.navigate(['/']);

  //     } else {
  //       this.router.navigate(['/']);
  //     }
  //   });
  // }

  checkUser() {
    this.accountService.getUser().subscribe((response) => {
      if (response.isSuccess) {
        this.user = response.data as User;
        let role = this.user.role.filter(x => x.text == this.adminRole && x.selected == true);
        if (role.length > 0) {
          this.isAdmin = true;
        }
        role = this.user.role.filter(x => x.text == this.customerRole && x.selected == true);
        if (role.length > 0) {
          this.isCustomer = true;
        }
      }
    });
  }

}
