import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private accountService: AccountService) { }
  isLoggedUser!: Boolean;

  ngOnInit(): void {
    this.isLoggedUser = false;
  }

}
