import { Component, OnInit } from '@angular/core';
import { Login } from 'src/Models/account/login.model';
import { AccountService } from 'src/services/account/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Apiresult } from 'src/Models/apiresult';
import { BrowserStorageService } from 'src/services/share/browser-storage.service';
import { AddCategoryDto } from 'src/Models/category/add-category-dto.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logginedUser: boolean = false;
  loginDto: Login;
  addCategory:AddCategoryDto;
  constructor(private accountService: AccountService, private router: Router,
    private toastr: ToastrService, private browserStorageService: BrowserStorageService) {

  }

  ngOnInit(): void {
    this.loginDto = new Login;
    this.loginDto.username = "mostafababaee@gmail.com";
    this.loginDto.password = "33552038";
  }

  loginUser() {
    this.accountService.login(this.loginDto).subscribe(
      (response) => {
        if (response.isSuccess) {
          this.toastr.success(response.message);
          this.browserStorageService.setLocal("token", response.data);
          // window.location.reload();
          this.router.navigate(['/']);
          return;
        } else {
          this.toastr.error(response.message);
        }
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
      });
  }

}
