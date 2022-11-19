import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/Models/account/user';
import { Paging } from 'src/Models/common/paging';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private accountService: AccountService, private toastr: ToastrService) { }
  users: User[] = [];
  pageModel: Paging;
  ngOnInit(): void {
    this.pageModel.page = 1;
    this.pageModel.count = 10;
    this.getusers();
  }

  getusers() {
    this.accountService.getUsers(this.pageModel).subscribe((response) => {
      console.log(response);
      if (response.isSuccess) {
        this.toastr.success(response.message);
        console.log(response.data);
        // this.users.push();
      } else {
        this.toastr.error(response.message);
      }
    },
      (error) => {
        this.toastr.error("خطای پیش بینی نشده");
      });
  }

  

}
