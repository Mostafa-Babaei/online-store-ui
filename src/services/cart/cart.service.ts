import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresult } from 'src/Models/apiresult';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { AddToCart } from 'src/Models/order/add-to-cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http: HttpClient) { }

  apiConfig: string = GlobalConstants.apiURL;

  addToCart(item: AddToCart): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/ShoppingCart/AddToCart", item);
  }

  removeItemFromCart(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/ShoppingCart/removeItem");
  }

  removeAllItemFromCart(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/ShoppingCart/removeAll");
  }

  changeNumberOfItem(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/ShoppingCart/changeNumbrOfItem");
  }

  addCartToOrder(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/ShoppingCart/AddToOrder");
  }
  
  getCartItems(){
    return this.http.get<Apiresult>(this.apiConfig + "/api/ShoppingCart/GetCartItems");
  }

}
