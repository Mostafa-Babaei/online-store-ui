import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/Models/account/user';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private toastr: ToastrService) { }
  users: User[];

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.accountService.getUsers().subscribe((response) => {
      if (response.isSuccess) {
        this.users = response.data as User[];
        console.log(this.users);
      } else {
        this.toastr.error(response.message);
      }
    });
  }

  changeStateUser(id:string){
    this.accountService.changeStateOfUsers(id).subscribe((response) => {
      if (response.isSuccess) {
        this.getAllUser();
      } else {
        this.toastr.error(response.message);
      }
    });
  }

}
