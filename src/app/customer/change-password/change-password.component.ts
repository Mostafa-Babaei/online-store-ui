import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private toastr: ToastrService) { }
  newPassword: string;
  ngOnInit(): void {
  }

  changePassword() {
    this.toastr.success("رمز عبور تغییر یافت");
  }
}
