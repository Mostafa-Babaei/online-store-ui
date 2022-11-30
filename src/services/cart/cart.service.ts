import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresult } from 'src/Models/apiresult';
import { GlobalConstants } from 'src/Models/common/global-constants';
import { AddToCart } from 'src/Models/order/add-to-cart';
import { BrowserStorageService } from '../share/browser-storage.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http: HttpClient, private storageService: BrowserStorageService) { }

  apiConfig: string = GlobalConstants.apiURL;

  addToCart(item: AddToCart): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/ShoppingCart/AddToCart", item);
  }

  removeItemFromCart(productId: number): Observable<Apiresult> {
    return this.http.delete<Apiresult>(this.apiConfig + "/api/ShoppingCart/RemoveItemFromCart/" + productId);
  }

  removeAllItemFromCart(): Observable<Apiresult> {
    return this.http.get<Apiresult>(this.apiConfig + "/api/ShoppingCart/removeAll");
  }

  changeNumberOfItem(productId: number, count: number): Observable<Apiresult> {
    return this.http.put<Apiresult>(this.apiConfig + "/api/ShoppingCart/ChangeNumberOfCartItem?productId=" + productId + "&newCount=" + count, null);
  }

  addCartToOrder(): Observable<Apiresult> {
    return this.http.post<Apiresult>(this.apiConfig + "/api/ShoppingCart/AddOrderFromCart", null);
  }

  getCartItems() {
    return this.http.get<Apiresult>(this.apiConfig + "/api/ShoppingCart/GetCartItems");
  }

  getNumberOfItem(): number {
    let num: number = 0;
    this.http.get<number>(this.apiConfig + "/api/ShoppingCart/GetNumberOfItem").subscribe((response) => {
      num = response;
      this.storageService.setLocal("numberOfCatItem", num);
    });
    return num;
  }

  readNumberOfItem(): number {
    if (this.storageService.existKey("numberOfCatItem") == false) return 0;
    return this.storageService.getLocal("numberOfCatItem");
  }

  setNumberOfItem(count: number) {
    this.storageService.setLocal("numberOfCatItem", count);
  }
}
