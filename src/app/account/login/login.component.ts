import { Component, OnInit } from '@angular/core';
import { Login } from 'src/Models/account/login.model';
import { AccountService } from 'src/services/account/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Apiresult } from 'src/Models/apiresult';
import { BrowserStorageService } from 'src/services/share/browser-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logginedUser: boolean = false;
  loginDto: Login;
  constructor(private accountService: AccountService, private router: Router,
    private toastr: ToastrService, private browserStorageService: BrowserStorageService) {

  }

  ngOnInit(): void {
    this.loginDto = new Login;
    this.loginDto.username = "mostafababaee@gmail.com";
    this.loginDto.password = "33552038";
    console.log("Test : " + this.loginDto);
  }

  loginUser() {
    this.accountService.login(this.loginDto).subscribe(
      (response) => {
        console.log(response);
        if (response.isSuccess) {
          this.toastr.success(response.message);
          console.log(response.data);
          this.browserStorageService.setLocal("token", response.data);
          // localStorage.setItem("token", JSON.stringify(response.data));
          this.router.navigate(['/register'])
        } else {
          this.toastr.error(response.message);
        }
      },
      (error) => {
        this.toastr.error("خطای پیش بینی نشده");
      });
  }

 

  resetPassword() {
    let token = this.browserStorageService.getLocal("token");
    console.log(token);
    this.accountService.resetPassword(this.loginDto.username).subscribe(
      (response) => {
        console.log(response);
        if (response.isSuccess) {
          this.toastr.success(response.message);
        } else {
          this.toastr.error(response.message);
        }
      },
      (error) => {
        this.toastr.error("خطای پیش بینی نشده");
      });
  }

}
