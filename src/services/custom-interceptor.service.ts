import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AccountService } from './account/account.service';
import { BrowserStorageService } from './share/browser-storage.service';
import { LoadingService } from './share/loading.service';

@Injectable({
  providedIn: 'root'
})

export class CustomInterceptorService implements HttpInterceptor {
  constructor(private browserStorageService: BrowserStorageService,
    private toastr: ToastrService, private loader: LoadingService,
    private accountService: AccountService, private router: Router) { }

  token = this.browserStorageService.getLocal("token");
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.lodaingOn();
    const auth = req.clone({ headers: new HttpHeaders().set(`Authorization`, `Bearer ${this.token}`) });
    return next.handle(auth)
      .pipe(
        catchError(err => {
          this.showError(err);
          return throwError(err);
        }),
        finalize(() => {
          this.loader.lodaingOff();
        })
      )
  }

  showError(err: any) {
    switch (err.status) {
      case 500:
        this.toastr.error("خطای سمت سرور ، لطفا بعدا تلاش نمائید ");
        break;
      case 400:
        this.toastr.error("پارامتر های ارسالی نا معتبر است ");
        break;
      case 404:
        this.toastr.error("آدرس مورد نظر یافت نشد ");
        break;
      case 401:
        this.accountService.RemoveToken();
        this.router.navigate(['/Login']);
        this.toastr.error("خطای احراز هویت ، لطفا وارد شوید");
        break;
      case 403:
        this.toastr.error("شما دارای مجوز برای این درخواست نمیباشد");
        break;
      case 415:
        this.toastr.error("مقادیر ارسالی معتبر نمی باشد");
        break;
      case 0:
        this.toastr.error("خطای ارتباط با سرور ");
        break;
      default:
        this.toastr.error("خطای پیش بینی نشده ");
        break;
    }

  }
}