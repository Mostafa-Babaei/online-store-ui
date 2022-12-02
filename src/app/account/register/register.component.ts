import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/services/account/account.service';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/Models/account/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerDto: Register;
  constructor(private accountService: AccountService, private router: Router, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.registerDto = new Register;
  }

  registerUser() {
    console.log('register : ' + this.registerDto);
    this.accountService.register(this.registerDto).subscribe((response) => {
      console.log(response);
      if (response.isSuccess) {
        this.toastr.success(response.message);
        this.router.navigate(['/login']);
      } else {
        this.toastr.error(response.message);
      }
    });
  }
}
