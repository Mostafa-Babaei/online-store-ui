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

  getCustomerOrder(page?: number, pageSize?: number): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/order/GetOrdersOfUser?email=");
  }

  getOrder(orderNumber: string): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/order/GetOrder?orderNumber=" + orderNumber);
  }
}
