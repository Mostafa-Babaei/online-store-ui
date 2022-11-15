import { Injectable } from '@angular/core';
import { Login } from 'src/Models/account/login.model';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/Models/common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  apiConfig: string = GlobalConstants.apiURL;
  
  login(loginModel: Login) {
    let result = this.http.post(this.apiConfig + "/login", loginModel);
    if (loginModel && loginModel.username == "1" && loginModel.password == "1") {
      return true;
    }
    else {
      return false;
    }
  }
}
