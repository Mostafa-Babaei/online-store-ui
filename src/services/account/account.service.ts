import { Injectable } from '@angular/core';
import { Login } from 'src/Models/account/login.model';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { Apiresult } from 'src/Models/apiresult';
import { Observable } from 'rxjs';
import { BrowserStorageService } from '../share/browser-storage.service';
import { Paging } from 'src/Models/common/paging';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private browserStorageService: BrowserStorageService) { }


  apiConfig: string = GlobalConstants.apiURL;

  getAuthToken(): string {
    return this.browserStorageService.getLocal('token')
  }

  isLogined(): boolean {
    return this.browserStorageService.existKey('token');
  }

  RemoveToken() {
    return this.browserStorageService.removeLocal('token')
  }

  login(loginModel: Login): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/auth/login", loginModel);
  }

  resetPassword(email: string): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/auth/resetpassword?email=" + email);
  }

  getUsers(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/auth/GetAllUser");
  }

  changeStateOfUsers(userId: string): Observable<Apiresult> {
    return this.http.put<Apiresult>(this.apiConfig + "/api/auth/ChangeState", userId);
  }

  logout() {
    this.browserStorageService.removeLocal("token");
  }

}
