import { Injectable } from '@angular/core';
import { Login } from 'src/Models/account/login.model';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { Apiresult } from 'src/Models/apiresult';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  apiConfig: string = GlobalConstants.apiURL;

  login(loginModel: Login): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/auth/login", loginModel);
  }
  
}
