import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { BrowserStorageService } from './share/browser-storage.service';
import { LoadingService } from './share/loading.service';

@Injectable({
  providedIn: 'root'
})

export class CustomInterceptorService implements HttpInterceptor {
  constructor(private browserStorageService: BrowserStorageService,
    private toastr: ToastrService, private loader: LoadingService) { }

  token = this.browserStorageService.getLocal("token");
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = req.clone({ headers: new HttpHeaders().set(`Authorization`, `Bearer ${this.token}`) });
    return next.handle(auth)
      .pipe(
        catchError(err => {
          this.loader.lodaingOn();
          console.log('loading on ...');
          setTimeout(function () {
            console.log('2');
        }, 4000);
          this.showError(err);
          return throwError(err);
        }),
        finalize(() => {
          console.log('loading off ...');
          this.loader.lodaingOff();
        })
      )
  }
  showError(err: any) {
    switch (err.status) {
      case 500:
        this.toastr.error("خطای سمت سرور ، لطفا بعدا تلاش نمائید ");
        break;
      case 404:
        this.toastr.error("آدرس مورد نظر یافت نشد ");
        break;
      case 401:
        this.toastr.error("خطای احراز هویت ، لطفا وارد شوید");
        break;
      case 403:
        this.toastr.error("شما دارای مجوز برای این درخواست نمیباشد");
        break;
      case 0:
        this.toastr.error("خطای ارتباط با سرور ");
        break;
      default:
        this.toastr.error("خطای پیش بینی نشده ");
        break;
    }
    this.toastr.warning(err.statusText);

  }
}