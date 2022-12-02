import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresult } from 'src/Models/apiresult';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { BrowserStorageService } from '../share/browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private browserStorageService: BrowserStorageService) { }
  apiConfig: string = GlobalConstants.apiURL;


  getAllOrder(page?: number, pageSize?: number): Observable<Apiresult> {
    let requestUrl: String = "";
    requestUrl = this.apiConfig + "/api/order/GetOrders?page=" + page;
    if (pageSize){
      requestUrl = requestUrl + "&count=" + pageSize;
    }
    return this.http.get<Apiresult>(requestUrl.toString());
  }

  getCustomerOrder(page?: number, pageSize?: number): Observable<Apiresult> {
    let requestUrl: String = "";
    requestUrl = this.apiConfig + "/api/order/GetOrdersOfUser?page=" + page;
    if (pageSize){
      requestUrl = requestUrl + "&count=" + pageSize;
    }
    return this.http.get<Apiresult>(requestUrl.toString());
  }

  getOrder(orderNumber: string): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/order/GetOrder?orderNumber=" + orderNumber);
  }

  paymentOrder(orderNumber: string) {
    return this.http.get<Apiresult>(this.apiConfig + "/api/order/PaymentOrder?orderNumber=" + orderNumber);
  }
}
