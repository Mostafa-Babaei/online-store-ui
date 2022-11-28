import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/Models/account/role';
import { User } from 'src/Models/account/user';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  roles: Role[];
  userId: string;
  user: User;
  constructor(private activeRoute: ActivatedRoute, private toastr: ToastrService, private router: Router,
    private accountService: AccountService) { }

  ngOnInit(): void {

    let id = this.activeRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      this.getUser(this.userId);
      console.log(this.user);
    })

    if (!this.userId) {
      this.toastr.error("کاربر یافت نشد");
      this.router.navigate(['/Admin/ListUser']);
    }
  }

  getUser(id: string) {
    this.accountService.getUserById(id).subscribe((response) => {
      if (response.isSuccess) {
        this.user = response.data as User;
      } else {
        this.toastr.error(response.message);
      }
    });
  }

  changeRole(role: any) {
    let index = this.user.role.indexOf(role);
    this.user.role[index].selected = !this.user.role[index].selected ;
    console.log(this.user.role);
  }

  updateUser() {
    this.user.userId = this.userId;
    this.accountService.updateUserById(this.user).subscribe((response) => {
      console.log(response);
      if (response.isSuccess) {
        this.toastr.success(response.message);
      } else {
        this.toastr.error(response.message);
      }
    });
  }

}
