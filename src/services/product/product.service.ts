import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresult } from 'src/Models/apiresult';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { AddProductDto } from 'src/Models/product/add-product-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apiConfig: string = GlobalConstants.apiURL;

  getAllProduct(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/Product/getAll");
  }


  addProduct(addModel: AddProductDto): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/Product/addProduct", addModel);
  }


  deleteProduct(id: number): Observable<Apiresult> {
    return this.http.delete<Apiresult>(this.apiConfig + "/api/Product/deleteProduct?id=" + id);
  }

  changeStateProduct(id: number): Observable<Apiresult> {
    return this.http.put<Apiresult>(this.apiConfig + "/api/Product/ChangeStateOfProduct", id);
  }


  editProduct(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/Product/editProduct");
  }

}
