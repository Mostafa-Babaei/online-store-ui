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


  addBrand(addBrand: any): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/brand/add", addBrand);
  }


  deleteBrand(id: number): Observable<Apiresult> {
    return this.http.delete<Apiresult>(this.apiConfig + "/api/brand/delete?id=" + id);
  }


  editBrand(editBrand: any): Observable<Apiresult> {
    return this.http.put<Apiresult>(this.apiConfig + "/api/brand/edit", editBrand);
  }
}
