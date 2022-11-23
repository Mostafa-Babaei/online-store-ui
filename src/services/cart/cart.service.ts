import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresult } from 'src/Models/apiresult';
import { GlobalConstants } from 'src/Models/common/global-constants';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http: HttpClient) { }

  apiConfig: string = GlobalConstants.apiURL;

  addToCart(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/cart/add");
  }

  removeItemFromCart(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/cart/removeItem");
  }

  removeAllItemFromCart(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/cart/removeAll");
  }

  changeNumberOfItem(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/cart/changeNumbrOfItem");
  }

  addCartToOrder(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/cart/AddToOrder");
  }

}
