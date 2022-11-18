import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserStorageService } from 'src/services/share/browser-storage.service';

@Component({
  selector: 'app-auth-partial',
  templateUrl: './auth-partial.component.html',
  styleUrls: ['./auth-partial.component.css']
})
export class AuthPartialComponent implements OnInit {
  constructor(private browserStorageService: BrowserStorageService, private router: Router) { }
  isLoggedUser!: boolean;

  ngOnInit(): void {
    this.isLoggedUser = false;
  }
  logout() {
    this.browserStorageService.removeLocal("token");
    this.router.navigate(['/login'])
  }
}
