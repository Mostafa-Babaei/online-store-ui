import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './admin/user/list/list.component';
import { AddComponent } from './admin/category/add/add.component';
import { EditComponent } from './admin/category/edit/edit.component';
import { HeaderComponent } from './share/header/header.component';
import { MenuComponent } from './share/menu/menu.component';
import { FooterComponent } from './share/footer/footer.component';
import { AuthPartialComponent } from './share/auth-partial/auth-partial.component';
import { NotfoundComponent } from './share/notfound/notfound.component';

import { AccountService } from 'src/services/account/account.service';
import { BrowserStorageService } from 'src/services/share/browser-storage.service'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomInterceptorService } from 'src/services/custom-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AuthPartialComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    AccountService,
    BrowserStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
