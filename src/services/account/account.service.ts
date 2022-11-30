import { Injectable } from '@angular/core';
import { Login } from 'src/Models/account/login.model';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { Apiresult } from 'src/Models/apiresult';
import { Observable } from 'rxjs';
import { BrowserStorageService } from '../share/browser-storage.service';
import { Paging } from 'src/Models/common/paging';
import { Register } from 'src/Models/account/register.model';
import { User } from 'src/Models/account/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private browserStorageService: BrowserStorageService) { }


  apiConfig: string = GlobalConstants.apiURL;
  adminRole: string = GlobalConstants.AdminRole;
  customerRole: string = GlobalConstants.CustomerRole;


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

  register(registerModel: Register): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/auth/register", registerModel);
  }

  resetPassword(email: string): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/auth/resetpassword?email=" + email);
  }

  getUsers(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/auth/GetAllUser");
  }

  changeStateOfUsers(userId: string): Observable<Apiresult> {
    return this.http.put<Apiresult>(this.apiConfig + "/api/auth/ChangeState?userId=" + userId, null);
  }

  logout() {
    this.browserStorageService.removeLocal("token");
  }

  getAllRole() {
    return this.http.get<Apiresult>(this.apiConfig + "/api/auth/GetAllRole");
  }

  AddRole(role: string) {
    return this.http.post<Apiresult>(this.apiConfig + "/api/auth/AddRole?role=" + role, null);
  }

  SetUserRole(role: string) {
    return this.http.post<Apiresult>(this.apiConfig + "/api/auth/SetUserRole", role);
  }

  changePassword(newPassword: string): Observable<Apiresult> {
    debugger;
    return this.http.put<Apiresult>(this.apiConfig + "/api/auth/ChangeUserPassword?newPassword=" + newPassword, null);
  }

  isAdmin(): Observable<boolean> {
    return this.http.get<boolean>(this.apiConfig + "/api/auth/IsInRole?role=" + this.adminRole);
  }

  isCustomer(): Observable<boolean> {
    return this.http.get<boolean>(this.apiConfig + "/api/auth/IsInRole?role=" + this.customerRole);
  }

  getUser(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/auth/GetCurrentUser");
  }


  getUserById(id: string): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/auth/GetCurrentUserById?userId=" + id);
  }

  updateUser(user: User) {
    return this.http.put<Apiresult>(this.apiConfig + "/api/auth/UpdateUser", user);
  }

  updateUserById(user: User) {
    return this.http.put<Apiresult>(this.apiConfig + "/api/auth/UpdateUserById", user);
  }


  setAvatarUser(avatar: File) {
    let formData: FormData = new FormData();
    formData.append('avatar', avatar, avatar.name);
    return this.http.post<Apiresult>(this.apiConfig + "/api/auth/AddAvatar", formData);
  }

  addNewUser(user: Register): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/auth/AddNewUser", user);
  }

}
