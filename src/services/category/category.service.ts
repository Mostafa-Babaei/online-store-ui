import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiresult } from 'src/Models/apiresult';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { BrowserStorageService } from '../share/browser-storage.service';
import { Observable } from 'rxjs';
import { AddCategoryDto } from 'src/Models/category/add-category-dto.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private browserStorageService: BrowserStorageService) { }

  apiConfig: string = GlobalConstants.apiURL;

  getAllCategory(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/category/get");
  }

  addCategory(model: AddCategoryDto): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/category/AddCategory", model);
  }

  deleteCategory(id: number): Observable<Apiresult> {
    return this.http.delete<Apiresult>(this.apiConfig + "/api/category/deleteCategory?id=" + id);
  }

  editCategory(editModel: any): Observable<Apiresult> {
    return this.http.put<Apiresult>(this.apiConfig + "/api/category/editCategory?", editModel);
  }

}
