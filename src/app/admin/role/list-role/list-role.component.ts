import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/Models/account/role';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private toastr: ToastrService) {
  }
  roles: Role[];
  roleName: string;

  ngOnInit(): void {
    this.getRoles();
  }

  addRole() {
    this.accountService.AddRole(this.roleName).subscribe((response) => {
      console.log(response);
      if (response.isSuccess) {
        this.toastr.success(response.message);
        this.roleName="";
        this.getRoles();
      } else {
        this.toastr.error(response.message);
      }
    });
  }

  getRoles() {
    this.accountService.getAllRole().subscribe((response) => {
      console.log(response);
      if (response.isSuccess) {
        this.roles = response.data as Role[];
      } else {
        this.toastr.error(response.message);
      }
    });
  }

}
