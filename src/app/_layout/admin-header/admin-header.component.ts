import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.accountService.logout();
    this.router.navigate(['/']);
  }
}
