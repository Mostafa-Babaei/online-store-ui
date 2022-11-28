import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/Models/account/register.model';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  registerModel: Register;
  constructor(private accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registerModel=new Register;
  }

  addUser() {
    this.accountService.addNewUser(this.registerModel).subscribe((response) => {
      if (response.isSuccess) {
        this.toastr.success(response.message);
        this.router.navigate(['/Admin/ListUser']);
      } else {
        this.toastr.error(response.message);
      }
    });
  }
}
