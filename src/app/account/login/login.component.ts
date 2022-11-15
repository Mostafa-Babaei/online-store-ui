import { Component, OnInit } from '@angular/core';
import { Login } from 'src/Models/account/login.model';
import { AccountService } from 'src/services/account/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logginedUser: boolean = false;
  loginDto: Login;
  constructor(private accountService: AccountService,private router: Router,private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.loginDto = new Login;
    this.loginDto.username = "demo";
    this.loginDto.password = "demo";
    console.log("Test : " + this.loginDto);
  }

  loginUser() {
    this.logginedUser = this.accountService.login(this.loginDto);
    if (this.logginedUser) {
      this.toastr.success("خوش آمدید")
      // this.router.navigate(['/register'])
    }else{
      this.toastr.error("خطا در ورود کاربر")
    }
  }

}
