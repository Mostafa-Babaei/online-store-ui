import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/Models/account/user';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
    private toastr: ToastrService, private accountService: AccountService) { }
  user: User;

  ngOnInit(): void {
  }

  getUser() {
    this.accountService.getUser().subscribe((response) => {
      if (response.isSuccess) {
        this.user = response.data as User;
      } else {
        this.toastr.error(response.message);
      }
    });
  }

}
