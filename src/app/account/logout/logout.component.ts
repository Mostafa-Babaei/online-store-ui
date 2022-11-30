import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/services/account/account.service';
import { BrowserStorageService } from 'src/services/share/browser-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router,
    private toastr: ToastrService, private browserStorageService: BrowserStorageService) { }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout().subscribe((response) => {
      if (response.isSuccess) {
        this.router.navigate(['/']);
        this.browserStorageService.removeLocal("token");
         window.location.reload();
      } else {
        this.toastr.error("خطا در خروج کاربر اتفاق افتاد ، مجددا امتحان کنید");
      }
    });
  }
}
