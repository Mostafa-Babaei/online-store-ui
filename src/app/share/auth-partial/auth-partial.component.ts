import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router, public accountService: AccountService, private storageService: BrowserStorageService) { }

  isLoggedUser: boolean = false;
  isCustomer: boolean = false;
  isAdmin: boolean = false;
  panelRoot: string;
  roles: string[];
  adminRole: string = GlobalConstants.AdminRole;
  customerRole: string = GlobalConstants.CustomerRole;


  ngOnInit(): void {
    this.isLoggedUser = this.accountService.isLogined();
    this.getRole();
    this.isAdmin = this.checkRoleUser(this.adminRole);
    this.isCustomer = this.checkRoleUser(this.customerRole);
  }

  logout() {
    this.browserStorageService.removeLocal("token");
    this.browserStorageService.removeLocal("rolesOfUser");
    this.browserStorageService.removeLocal("numberOfCatItem");
    this.accountService.logout().subscribe((response) => {
      if (response.isSuccess) {
        this.router.navigate(['/']);
        window.location.reload();
        return;
      } else {
        this.toastr.error(response.message);
      }
    });
  }


  checkRoleUser(roleName: string): boolean {
    console.log("check Roles : " + roleName);
    let roles: string[] = [];

    if (this.accountService.isLogined() == false)
      return false;
    console.log("Logined");

    if (this.browserStorageService.existKey("rolesOfUser") == false)
      return false;
    console.log("rolesOfUser Exist");

    roles = this.browserStorageService.getLocal("rolesOfUser");
    if (roles.length > 0) {
      let role = roles.indexOf(roleName);
      if (role > -1) {
        console.log(roleName + " : Ok");
        return true;
      }
      return false;
    }
    return false;

    // this.accountService.getUserRole().subscribe((response) => {
    //   if (response.isSuccess) {
    //     roles = response.data as string[];
    //     this.browserStorageService.setLocal("rolesOfUser", roles);
    //   }
    // });

  }


  goToProfile(role: string) {

    this.accountService.isInRole(role).subscribe((response) => {
      if (response) {
        if (role == this.adminRole) {
          this.router.navigate(['/Admin/Dashboard'])
        }
        if (role == this.customerRole) {
          this.router.navigate(['/CustomerPanel/Profile'])
        }
      } else {
        this.toastr.warning("خطا در بررسی مجوز دسترسی ");
      }
    });
  }

  getRole() {
    console.log("get Roles");
    this.accountService.getUserRole().subscribe((Response) => {
      if (Response.isSuccess) {
        console.log(Response.data);
        this.browserStorageService.setLocal("rolesOfUser", Response.data);
        this.isAdmin = this.checkRoleUser(this.adminRole);
        this.isCustomer = this.checkRoleUser(this.customerRole);
      } else {
        console.log(Response.message);
      }
    });
  }


  // checkUser() {
  //   if (this.accountService.isLogined()) {
  //     if (this.storageService.existKey("rolesOfUser") == false) {
  //       this.roles = this.storageService.getLocal("rolesOfUser");
  //     } else {
  //       this.accountService.getUserRole().subscribe((response) => {
  //         if (response.isSuccess) {
  //           this.roles = response.data as string[];
  //           this.storageService.setLocal("rolesOfUser", this.roles);
  //         }
  //       });
  //     }

  //     if (this.roles.length > 0) {
  //       let role = this.roles.indexOf(this.adminRole);
  //       if (role > -1) {
  //         this.isAdmin = true;
  //       }
  //       role = this.roles.indexOf(this.customerRole);
  //       if (role > -1) {
  //         this.isCustomer = true;
  //       }

  //     }
  //   }
  // }

}