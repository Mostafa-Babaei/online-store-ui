import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresult } from 'src/Models/apiresult';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { AddProductDto } from 'src/Models/product/add-product-dto';
import { HomeRequestDto } from 'src/Models/Shop/home-request-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apiConfig: string = GlobalConstants.apiURL;

  getAllProduct(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/Product/getAll");
  }

  getAllProductByCategory(categoryId: number): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/Product/getAll");
  }

  getAllProductByFilter(homeRequest: HomeRequestDto): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/Product/GetProductsByFilter", homeRequest);
  }

  addProduct(addModel: any): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/Product/addProduct", addModel);
  }

  getProduct(productId: number) {
    return this.http.get<Apiresult>(this.apiConfig + "/api/Product/Get?id=" + productId);
  }

  deleteProduct(id: number): Observable<Apiresult> {
    return this.http.delete<Apiresult>(this.apiConfig + "/api/Product/deleteProduct?id=" + id);
  }

  changeStateProduct(id: number): Observable<Apiresult> {
    return this.http.put<Apiresult>(this.apiConfig + "/api/Product/ChangeStateOfProduct?id=" + id, null);
  }

  editProduct(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/Product/editProduct");
  }

  uploadProductImage(img: File, productId: number) {

    var formData = new FormData();
    formData.append("ProductImage", img, img.name);


    return this.http.post<Apiresult>(this.apiConfig + "/api/Product/UploadImageOfProduct/" + productId, formData);
  }

}
