import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit(): void {
    this.isLoggedUser = this.accountService.isLogined();
  }

  logout() {
    this.browserStorageService.removeLocal("token");
    this.router.navigate(['/'])
    window.location.reload;
  }
}
