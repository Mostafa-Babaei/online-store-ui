import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isLoggedUser:any ;

  ngOnInit(): void {
    this.isLoggedUser = false;
  }

}
