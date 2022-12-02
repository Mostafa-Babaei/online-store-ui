import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/Models/account/user';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
    private toastr: ToastrService, private accountService: AccountService) { }
  apiConfig: string = GlobalConstants.apiURL;
  user: User;
  imageSrc: string;
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.accountService.getUser().subscribe((response) => {
      if (response.isSuccess) {
        this.user = response.data as User;
        this.imageSrc = this.user.avatar;
      } else {
        this.toastr.error(response.message);
      }
    });
  }

  onchangeImage(event: any) {
    console.log(event);
    let fl = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    }
    reader.readAsDataURL(fl);

    this.accountService.setAvatarUser(fl).subscribe((response) => {
      if (response.isSuccess) {
        this.toastr.success(response.message);
      } else {
        this.toastr.error(response.message);
      }
    });

  }

  updateUser() {
    this.accountService.updateUser(this.user).subscribe((response) => {
      console.log(response);
      if (response.isSuccess) {
        this.toastr.success(response.message);
      } else {
        this.toastr.error(response.message);
      }
    });
  }

}
