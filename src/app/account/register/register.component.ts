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
  }

  registerUser() {
    this.toastr.success("ثبت نام با موفقیت انجام شد");
  }
}
