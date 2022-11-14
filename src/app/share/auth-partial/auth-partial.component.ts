import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-partial',
  templateUrl: './auth-partial.component.html',
  styleUrls: ['./auth-partial.component.css']
})
export class AuthPartialComponent implements OnInit {
  constructor() { }
  isLoggedUser: boolean | undefined;

  ngOnInit(): void {
    this.isLoggedUser = false;
  }

}
