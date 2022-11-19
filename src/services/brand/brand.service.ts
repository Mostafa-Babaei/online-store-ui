import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresult } from 'src/Models/apiresult';
import { GlobalConstants } from 'src/Models/common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }
  
  apiConfig: string = GlobalConstants.apiURL;

  getAllBrand(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/brand/get");
  }

  
  addBrand(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/brand/get");
  }

  
  deleteBrand(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/brand/delete");
  }

  
  editBrand(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/brand/edit");
  }
}
