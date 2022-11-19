import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresult } from 'src/Models/apiresult';
import { GlobalConstants } from 'src/Models/common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apiConfig: string = GlobalConstants.apiURL;

  getAllProduct(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/Product/get");
  }

  
  addProduct(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/Product/add");
  }

  
  deleteProduct(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/Product/delete");
  }

  
  editProduct(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/Product/edit");
  }

}
