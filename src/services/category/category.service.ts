import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiresult } from 'src/Models/apiresult';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { BrowserStorageService } from '../share/browser-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private browserStorageService: BrowserStorageService) { }

  apiConfig: string = GlobalConstants.apiURL;

  getAllCategory(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/category/get");
  }

  
  addCategory(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/category/add");
  }

  
  deleteCategory(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/category/delete");
  }

  
  editCategory(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/category/edit");
  }

}
