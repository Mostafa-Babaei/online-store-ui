import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrowserStorageService } from './share/browser-storage.service';

@Injectable({
  providedIn: 'root'
})

export class CustomInterceptorService implements HttpInterceptor {
  constructor(private browserStorageService: BrowserStorageService) { }

  token = this.browserStorageService.getLocal("token");
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = req.clone({ headers: new HttpHeaders().set(`Authorization`, `Bearer ${this.token}`) });
    return next.handle(auth);
  }
}