import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/services/account/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private toastr: ToastrService) {
  }
  
  email: string;
  ngOnInit(): void {
    this.email="m@m.com"
  }

  sendNewPassword() {
    this.accountService.resetPassword(this.email).subscribe((response) => {
      if (response.isSuccess) {
        this.toastr.success(response.message);
      } else {
        this.toastr.error(response.message);
      }
    });
  }

}
